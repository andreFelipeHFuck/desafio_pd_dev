import { Component } from '@angular/core';
import { EditionComponent } from '../edition/edition.component';
import { ProfileComponent } from '../profile/profile.component';

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

}
