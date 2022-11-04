import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-mini-cards',
  templateUrl: './mini-cards.component.html',
  styleUrls: ['./mini-cards.component.css']
})
export class MiniCardsComponent {

  constructor() { }

  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: string;
  @Input() color!: string;

}
