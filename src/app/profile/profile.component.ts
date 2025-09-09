import { Component, input } from '@angular/core';
import { Player, PlayerPosition } from '../models/match.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  player = input.required<Player>();
  isWinner = input.required<boolean>();
  position = input.required<PlayerPosition>();

  isPlayerPositionRight(): boolean{
    return this.position() === PlayerPosition.Right;
  }

  isPlayerPositionLeft(): boolean{
    return this.position() === PlayerPosition.Left;
  }
}
