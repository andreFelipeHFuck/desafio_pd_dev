import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from './components/match-card.component';
import { MatchService } from './services/match.service';
import { Match } from './models/match.model';
import { ButtonComponent } from './button/button.component';
import { MatchCardHeaderComponent } from './match-card-header/match-card-header.component'
import { MatchCardFooterComponent } from './match-card-footer/match-card-footer.component'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      CommonModule, 
      MatchCardComponent,
      ButtonComponent,
      MatchCardHeaderComponent,
      MatchCardFooterComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  matches: Match[] = [];
  loading = true;
  error = false;

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.matchService.getMatches().subscribe({
      next: (data) => {
        this.matches = data.matches;
        this.loading = false;
      },
      error: (err) => {
        this.error = true;
        this.loading = false;
        console.error('Erro:', err);
      },
    });
  }
}
