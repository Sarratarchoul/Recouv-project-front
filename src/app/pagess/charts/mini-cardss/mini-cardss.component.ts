import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, Input } from '@angular/core';
import { FactureService } from '../../facture.service';
import { Nbr_relance } from '../../nbr_relance';

@Component({
  selector: 'ngx-mini-cardss',
  templateUrl: './mini-cardss.component.html',
  styleUrls: ['./mini-cardss.component.css']
})
export class MiniCardssComponent  {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: string;
  @Input() color!: string;
  
  constructor() { }

}
