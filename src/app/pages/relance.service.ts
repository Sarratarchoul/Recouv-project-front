import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({providedIn: 'root'})
export class RelanceService {
  public formData!:  FormGroup; 
  private baseUrl = 'http://localhost:8080/relance';

  constructor(private http: HttpClient){}

  public getRelances(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-relance`);
  }

  public addRelance(relance: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add-relance`, relance);
  }

  public updateRelance(relance: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-relance`, relance);
  }

  public deleteRelance(idR: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-relance/${idR}`,{ responseType: 'text' });
  }
  findRelanceById(idR: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/retrieve-relance/${idR}`);  
  } 
  getExcelData(){
    return this.http.get<any>(`${this.baseUrl}/export/excel`, { responseType: 'arraybuffer' as 'json' });
  }
}