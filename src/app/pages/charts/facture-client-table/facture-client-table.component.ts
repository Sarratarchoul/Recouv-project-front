import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FactureClientTableDataSource } from './facture-client-table-datasource';
import { FactureService } from '../../facture.service';
import { Facture_Client } from '../../interface/facture-client';
@Component({
  selector: 'app-facture-client-table',
  templateUrl: './facture-client-table.component.html',
  styleUrls: ['./facture-client-table.component.css']
})
export class FactureClientTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //@ViewChild(MatTable) table!: MatTable<FactureClientTableItem>;
  @ViewChild(MatTable) table!: MatTable<Facture_Client>;
  dataLength!: number;
  dataSource!: FactureClientTableDataSource;
  errorMessage!: string;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['code_client', 'ecours', 'retard'];

  constructor(private factureService: FactureService) {
  }
  ngOnInit(){
    this.dataSource = new FactureClientTableDataSource(this.factureService);
    this.factureService.getFacture_client().subscribe({
      next: facture_client => {
       this.dataLength = facture_client;
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
