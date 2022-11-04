
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ClientService {
  private baseUrl = 'http://localhost:8080/client';

  constructor(private http: HttpClient){}

  public getClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-client`);
  }

  public addClient(client: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add-client`, client);
  }

  public updateClient(client: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-client`, client);
  }

  public deleteClient(code_client: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-client/${code_client}`,{ responseType: 'text' });
  }
  findClientById(code_client: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/retrieve-client/${code_client}`);  
  } 
  getRelancesClient(code_client: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/${code_client}/relances`);  
  }
  getFacturesClient(code_client: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/${code_client}/factures`);  
  }
  getExcelData(){
    return this.http.get<any>(`${this.baseUrl}/export/excel`, { responseType: 'arraybuffer' as 'json' });
  }
}