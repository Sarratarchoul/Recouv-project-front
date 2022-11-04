import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service'; 
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Client } from '../client'; 

@Component({
  selector: 'ngx-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  constructor(private clientservice:ClientService) { }  
  
  client:Client= new Client(); 
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  clientsaveform=new FormGroup({  
    nom_client:new FormControl(),
    senario_relance:new FormControl(),  
    adresse_client:new FormControl(),  
    email:new FormControl('',[Validators.required,Validators.email] ),
    numTel:new FormControl('' , [Validators.required , Validators.minLength(8) ] ), 
    personne_contact:new FormControl(),
    nom_groupe:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),
    moyen_de_paiement: new FormControl()
  });  
  
  addClient(addClient: any){  
    this.client=new Client();     
    this.client.nom_client=this.ClientNomC?.value; 
    this.client.senario_relance=this.ClientSenario?.value; 
    this.client.adresse_client=this.ClientAdresse?.value;  
    this.client.email=this.ClientEmail?.value; 
    this.client.numTel=this.ClientNum?.value;
    this.client.personne_contact=this.ClientPersonne?.value;
    this.client.nom_groupe=this.ClientNom?.value;  
    this.client.moyen_de_paiement=this.ClientMoyen?.value;
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.clientservice.addClient(this.client)  
      .subscribe({
        next: (data) => console.log(data),
        error: ( error )=> console.log(error)});  
    this.client = new Client();  
  }    
  get ClientNomC(){  
    return this.clientsaveform.get('nom_client');  
  }
  get ClientSenario(){  
    return this.clientsaveform.get('senario_relance');  
  } 
  get ClientAdresse(){  
    return this.clientsaveform.get('adresse_client');  
  }  
  
  get ClientEmail(){  
    return this.clientsaveform.get('email');  
  }   
  get ClientNum(){  
    return this.clientsaveform.get('numTel');  
  } 
  get ClientPersonne(){  
    return this.clientsaveform.get('personne_contact');  
  } 
  get ClientNom(){  
    return this.clientsaveform.get('nom_groupe');  
  } 
  get ClientMoyen(){  
    return this.clientsaveform.get('moyen_de_paiement');  
  }
  
   
  addClientForm(){  
    this.submitted=false;  
    this.clientsaveform.reset();  
  }  
}  
