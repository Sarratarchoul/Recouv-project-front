import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Nbr_relance } from '../nbr_relance';
import { FactureService } from '../facture.service';
import { Retards } from '../retards';
import { Chiffre_aff } from '../Chiffre_aff';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  // dashboard.component.js


cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
   map(({ matches }) => {
     if (matches) {
       return {
         columns: 1,
         miniCard: { cols: 1, rows: 1 },
         chart: { cols: 1, rows: 2 },
         tables: { cols: 1, rows: 2 },
         table: { cols: 1, rows: 2 },
       };
     }

    return {
       columns: 3,
       miniCard: { cols: 1, rows: 1 },
       chart: { cols: 1, rows: 2 },
       tables: { cols: 1, rows: 2 },
       table: { cols: 3, rows: 2 },
     };
   })
 );
 miniCardData!: Retards[];
 miniCarddata!: Nbr_relance[];
 miniCarddatac!: Chiffre_aff[];
  constructor(private breakpointObserver: BreakpointObserver, private factureService: FactureService) {}

  ngOnInit() {
    this.factureService.getRetards().subscribe({
      next: summaryData => {
        this.miniCardData = summaryData;
      }
    });
    this.factureService.getRelances().subscribe({
      next: summaryData => {
        this.miniCarddata = summaryData;
      }
    });
    this.factureService.getChiffres().subscribe({
      next: summaryData => {
        this.miniCarddatac = summaryData;
      }
    });
  }  
}
