import { Component, input } from '@angular/core';
import { EditionComponent } from '../edition/edition.component';
import { ProfileComponent } from '../profile/profile.component';
import { Player, PlayerPosition } from '../models/match.model';

@Component({
  selector: 'app-players',
  imports: [
    EditionComponent,
    ProfileComponent
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent {
    player1 = input.required<Player>();
    player1Position: PlayerPosition = PlayerPosition.Right;

    player2 = input.required<Player>();
    player2Position: PlayerPosition = PlayerPosition.Left;

    winner = input.required<string>();
}
