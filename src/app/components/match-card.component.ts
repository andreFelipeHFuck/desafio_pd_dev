import { Component, Input } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Match } from '../models/match.model';

@Component({
    selector: 'app-match-card',
    standalone: true,
    imports: [CommonModule, TitleCasePipe],
    templateUrl: './match-card.component.html',
    styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent {
  @Input() match!: Match;

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  formatDateShort(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('pt-BR', { month: 'short' });
    const year = date.getFullYear();
    return `${day}/${month.toLowerCase()}/${year}`;
  }

  formatWeekday(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { weekday: 'long' });
  }

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
