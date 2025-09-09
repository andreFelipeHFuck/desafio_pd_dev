import { Component, input } from '@angular/core';

@Component({
  selector: 'app-match-card-header',
  imports: [],
  templateUrl: './match-card-header.component.html',
  styleUrl: './match-card-header.component.scss'
})
export class MatchCardHeaderComponent {
  date = input.required<string>();


  private formatMount(date: Date): string{
    const mount = date
                  .toLocaleDateString('pt-BR', {month: 'short'})
                  .split('.')[0];

    return mount.charAt(0).toUpperCase() + mount.slice(1);
  }

  formatDateShort(dateString: string): string{
    if (!dateString) return '';
    
    const date: Date = new Date(dateString);

    console.log(date.toLocaleDateString('pt-BR', {day: '2-digit'}));

    const day = date.toLocaleDateString('pt-BR', {day: '2-digit'});
    const mount = this.formatMount(date);
    const year = date.getFullYear();

    return `${day}/${mount}/${year}`;
  }

  formatWeekday(dateString: string): string{
     if (!dateString) return '';

    const date: Date = new Date(dateString);
    const weeekday = date.toLocaleDateString('pt-BR', {weekday: 'long'});

    return weeekday.charAt(0).toUpperCase() + weeekday.slice(1);
  }
}
