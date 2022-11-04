import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur'; 
import { FormGroup } from '@angular/forms';


@Injectable({providedIn: 'root'})
export class UtilisateurService {
 // loginUrl : string = '';
  //signUpUrl : string = '';
  private baseUrl = 'http://localhost:8080/utilisateur';
  host :string = 'http://localhost:8080';
  list:  any=[];
  islogin = false;
  admin = false;
  suser = false;
  client = false;
  four = false;
  //host :string = 'http://localhost:8080';
  choixmenu : string  = 'A';
  name : string = "Foulen";
  public formData!:  FormGroup; 

  constructor(private http: HttpClient){
 //   this.loginUrl = "http://localhost:8080/utilisateur/login";
  //  this.signUpUrl = "http://localhost:8080/utilisateur/register";
  }

  public getUtilisateurs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-utilisateurs`);
  }
  
  public addUtilisateur(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add-Utilisateur`, info);
  }

 public updateUtilisateur(utilisateur: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-utilisateur`, utilisateur);
  }
  public update(utilisateur: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modify-utilisateur`, utilisateur);
  }
  public deleteUtilisateur(id_utilisateur: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-utilisateur/${id_utilisateur}`,{ responseType: 'text' });
  }
  findUtilisateurById(id_utilisateur: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/retrieve-utilisateur/${id_utilisateur}`);  
  } 
 // updatedata(id_utilisateur: number, value: any): Observable<Object> {
  //  return this.http.put(`${this.baseUrl}/update-utilisateur/${id_utilisateur}`, value);
  //}
 // login(utilisateur : Utilisateur) : Observable<any> {
   // return this.http.post<any>(this.loginUrl,utilisateur);
  //}

 // signUp(utilisateur : Utilisateur) : Observable<any> {
 //   return this.http.post<any>(this.signUpUrl,utilisateur);
  //}
  login(email :string,pwd : string) {
    return this.http.get(`${this.baseUrl}/auth/${email}`);
   
   } 
   
   verifEmail(email :string) {
    return this.http.get(`${this.baseUrl}/verif/${email}`);
   
   }  
  // createData(info: Object): Observable<Object> {
 //  return this.http.post(`${this.baseUrl}/create-Utilisateur`, info);
  //}

}