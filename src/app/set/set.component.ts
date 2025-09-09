import { Component, input } from '@angular/core';

@Component({
  selector: 'app-set',
  imports: [],
  templateUrl: './set.component.html',
  styleUrl: './set.component.scss'
})
export class SetComponent {
  scores = input.required<string>();

}
