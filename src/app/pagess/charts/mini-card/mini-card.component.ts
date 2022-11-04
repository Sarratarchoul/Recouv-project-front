import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, Input } from '@angular/core';
import { FactureService } from '../../facture.service';
import { Nbr_relance } from '../../nbr_relance';

@Component({
  selector: 'ngx-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent  {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: string;
  @Input() color!: string;
  
  constructor() { }

}
