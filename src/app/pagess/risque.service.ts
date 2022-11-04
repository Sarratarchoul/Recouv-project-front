import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Risque } from './interface/risque';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RisqueService {
private risqueUrl ='http://localhost:8080/facture/risque';

  constructor(private http: HttpClient){}


  getOrders(offset: number, pageSize: number, sortField: string, sortDirection: string): Observable<Risque[]> {
    return this.http.get<Risque[]>(this.risqueUrl).pipe(
      map((response) => {
        return this.getPagedData(
          this.getSortedData(
            response,
            sortField,
            sortDirection),
          offset, pageSize);
      }),
      catchError(this.handleError)
    );
  }

  getRisque(): Observable<number> {
    return this.http.get<Risque[]>(this.risqueUrl).pipe(
      map((response) => {
        return response.length;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    return throwError(errorMessage);
  }

  private getPagedData(data: Risque[], startIndex: number, pageSize: number) {
    return data.splice(startIndex, pageSize);
  }

  private getSortedData(data: Risque[], active: string, direction: string) {
    if (!active || direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = direction === 'asc';
      switch (active) {
        case "code_client": return compare(+a.code_client, +b.code_client, isAsc);
        case "ecours_creance": return compare(+a.ecours_creance, +b.ecours_creance, isAsc);
        case "ecours_total": return compare(+a.ecours_total, +b.ecours_total, isAsc);
        case "retard": return compare(+a.retard, +b.retard, isAsc);
        case "tauxR": return compare(+a.tauxR, +b.tauxR, isAsc);
        case "garantie_assureur": return compare(+a.garantie_assureur, +b.garantie_assureur, isAsc);
        case "autres_garanties": return compare(+a.autres_garanties, +b.autres_garanties, isAsc);
        case "risque_actuel": return compare(+a.risque_actuel, +b.risque_actuel, isAsc);
        case "risque_actuel_pourcent": return compare(+a.risque_actuel_pourcent, +b.risque_actuel_pourcent, isAsc);
        case "risque": return compare(+a.risque, +b.risque, isAsc);
        case "limite_credit": return compare(+a.limite_credit, +b.limite_credit, isAsc);
        case "encours_disponible": return compare(+a.encours_disponible, +b.encours_disponible, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}