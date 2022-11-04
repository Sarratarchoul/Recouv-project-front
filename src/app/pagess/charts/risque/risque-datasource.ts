import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of , merge } from 'rxjs';
import { Risque } from '../../interface/risque';
import { mergeMap } from 'rxjs/operators';
import { RisqueService } from '../../risque.service';
// TODO: Replace this with your own data model type


/**
 * Data source for the Risque view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class RisqueDataSource extends DataSource<Risque> {
  paginator!: MatPaginator;
  sort!: MatSort;

  constructor(private risqueService: RisqueService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
   connect(): Observable<Risque[]> {
    const dataMutations = [
      of('Initial load'),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(mergeMap(() => {
      return this.risqueService.getOrders(
        this.paginator.pageIndex * this.paginator.pageSize,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction
        );
    }));
  }
 
  disconnect() {} 
 }