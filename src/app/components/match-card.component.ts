import { Component, Input } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Match } from '../models/match.model';
import { MatchCardHeaderComponent } from '../match-card-header/match-card-header.component';
import { MatchCardFooterComponent } from '../match-card-footer/match-card-footer.component';
import { PlayersComponent } from '../players/players.component';
import { EditionComponent } from "../edition/edition.component";
import { SetComponent } from '../set/set.component';

@Component({
    selector: 'app-match-card',
    standalone: true,
    imports: [
    CommonModule,
    MatchCardHeaderComponent,
    MatchCardFooterComponent,
    PlayersComponent,
    EditionComponent,
    SetComponent
],
    templateUrl: './match-card.component.html',
    styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent {
  @Input() match!: Match;

  formatScores(): string {
    const result = this.match.result;
    const scores: string[] = [];
    
    // Procura por todos os sets disponíveis (set1, set2, set3, set4, set5)
    for (let i = 1; i <= 5; i++) {
      const setKey = `set${i}` as keyof typeof result.player_1;
      const p1Score = result.player_1[setKey];
      const p2Score = result.player_2[setKey];
      
      if (p1Score !== undefined && p2Score !== undefined) {
        scores.push(`${p1Score}/${p2Score}`);
      }
    }
    
    return scores.join(', ');
  }

  isPlayer1Winner(): boolean {
    return this.match.result.winner.uid === this.match.player_1.uid;
  }

  isPlayer2Winner(): boolean {
    return this.match.result.winner.uid === this.match.player_2.uid;
  }
}
