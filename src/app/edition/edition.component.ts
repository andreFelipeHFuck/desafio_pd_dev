import { Component, input } from '@angular/core';
import { Match } from '../models/match.model';

interface Competition {
   comp_id: string;
   edition_id: string;
   round_id: string;
   group?: number; 
}

@Component({
  selector: 'app-edition',
  imports: [],
  templateUrl: './edition.component.html',
  styleUrl: './edition.component.scss'
})

export class EditionComponent {
  editionId = input.required<string | undefined>();
  roundId= input.required<string | undefined>();
}
