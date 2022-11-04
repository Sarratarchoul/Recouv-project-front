import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Risque } from '../../interface/risque';
import { RisqueService } from '../../risque.service';
import { RisqueDataSource } from './risque-datasource';

@Component({
  selector: 'app-risque',
  templateUrl: './risque.component.html',
  styleUrls: ['./risque.component.css']
})
export class RisqueComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //@ViewChild(MatTable) table!: MatTable<FactureClientTableItem>;
  @ViewChild(MatTable) table!: MatTable<Risque>;
  dataLength!: number;
  dataSource!: RisqueDataSource;
  errorMessage!: string;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['code_client', 'ecours_creance', 'ecours_total', 'retard', 'tauxR', 'garantie_assureur', 'autres_garanties', 'risque_actuel', 'risque_actuel_pourcent', 'risque', 'limite_credit', 'encours_disponible'];
  constructor(private risqueService: RisqueService) {
  }
  ngOnInit(){
    this.dataSource = new RisqueDataSource(this.risqueService);
    this.risqueService.getRisque().subscribe({
      next: risque => {
       this.dataLength = risque;
      },
      error: err => this.errorMessage = err
    });
   }
   

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
