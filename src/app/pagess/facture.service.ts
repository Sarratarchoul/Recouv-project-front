import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Balanceagee } from './interface/balance.interface';
import { Facture_Client } from './interface/facture-client';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Nbr_relance } from './nbr_relance';
import { Retards } from './retards';
import { Chiffre_aff } from './Chiffre_aff';
import { FormGroup } from '@angular/forms';
@Injectable({providedIn: 'root'})
export class FactureService {
  public formData!:  FormGroup; 
  private baseUrl = 'http://localhost:8080/facture';
private factureUrl ='http://localhost:8080/facture/facture_client';
private retardUrl ='http://localhost:8080/facture/retardsT';
private chiffreUrl ='http://localhost:8080/facture/Chiffre_aff';
private relanceUrl ='http://localhost:8080/relance/relance_nbr';
  constructor(private http: HttpClient){}

  public getFactures(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-facture`);
  }

  public addFacture(facture: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add-facture`, facture);
  }

  public updateFacture(facture: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-facture`, facture);
  }

  public deleteFacture(num_facture: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-facture/${num_facture}`,{ responseType: 'text' });
  }
  findFactureById(num_facture: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/retrieve-facture/${num_facture}`);  
  } 
  
  getRetards(): Observable<Retards[]> {
    return this.http.get<Retards[]>(this.retardUrl)
  }
  getChiffres(): Observable<Chiffre_aff[]> {
    return this.http.get<Chiffre_aff[]>(this.chiffreUrl)
  }
  getRelances(): Observable<Nbr_relance[]> {
    return this.http.get<Nbr_relance[]>(this.relanceUrl)
  }
  getOrders(offset: number, pageSize: number, sortField: string, sortDirection: string): Observable<Facture_Client[]> {
    return this.http.get<Facture_Client[]>(this.factureUrl).pipe(
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

  getFacture_client(): Observable<number> {
    return this.http.get<Facture_Client[]>(this.factureUrl).pipe(
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

  private getPagedData(data: Facture_Client[], startIndex: number, pageSize: number) {
    return data.splice(startIndex, pageSize);
  }

  private getSortedData(data: Facture_Client[], active: string, direction: string) {
    if (!active || direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = direction === 'asc';
      switch (active) {
        case "code_client": return compare(+a.code_client, +b.code_client, isAsc);
        case "encours": return compare(+a.ecours, +b.ecours, isAsc);
        case "retard": return compare(+a.retard, +b.retard, isAsc);
        default: return 0;
      }
    });
  }
  getExcelData(){
    return this.http.get<any>(`${this.baseUrl}/export/excel`, { responseType: 'arraybuffer' as 'json' });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}