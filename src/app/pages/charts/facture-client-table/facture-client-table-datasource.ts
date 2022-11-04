import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, merge, of } from 'rxjs';
import { Facture_Client } from '../../interface/facture-client';
import { FactureService } from '../../facture.service';
import { mergeMap } from 'rxjs/operators';


/**
 * Data source for the FactureClientTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class FactureClientTableDataSource extends DataSource<Facture_Client> {
  paginator!: MatPaginator;
  sort!: MatSort;

  constructor(private factureService: FactureService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
   connect(): Observable<Facture_Client[]> {
    const dataMutations = [
      of('Initial load'),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(mergeMap(() => {
      return this.factureService.getOrders(
        this.paginator.pageIndex * this.paginator.pageSize,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction
        );
    }));
  }
 
  disconnect() {} 
 }
