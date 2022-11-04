import { Component, OnInit } from '@angular/core';
import { FactureService } from '../facture.service'; 
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Facture } from '../facture';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'ngx-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.scss']
})
export class AddFactureComponent implements OnInit {

  constructor(private factureservice:FactureService, private clientService:ClientService) { }  
  
  facture:Facture= new Facture(); 
  submitted = false;  
  ClientList!: Client[];
  ngOnInit() {  
    this.submitted=false;  
    this.clientService.getClients().subscribe( response =>{
        this.ClientList = response;
        console.log(this.ClientList);
      }
     );
  }  
  
  facturesaveform=new FormGroup({  
    date_emission:new FormControl( ),  
    date_echeance:new FormControl(),  
    montant_initial:new FormControl(),  
    montant_restant:new FormControl(),
    status:new FormControl(), 
    delai_paimentF:new FormControl(),
    garantie_assureur:new FormControl(),
    autres_garanties:new FormControl(),
    limite_credit:new FormControl(),
    idclient:new FormControl()
  });  
  
  addFacture(addFacture: any){  
    this.facture=new Facture();      
   this.facture.date_emission=this.FactureEmission?.value; 
    this.facture.date_echeance=this.FactureEcheance?.value; 
    this.facture.montant_initial=this.FactureInitial?.value;  
    this.facture.montant_restant=this.FactureRestant?.value; 
    this.facture.status=this.FactureStatus?.value; 
    this.facture.delai_paimentF=this.FactureDelai?.value;
    this.facture.garantie_assureur=this.FactureAssureur?.value;
    this.facture.limite_credit=this.FactureLimite?.value;
    this.facture.autres_garanties=this.FactureGaranties?.value;
    this.facture.idclient=this.FactureClient?.value;
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.factureservice.addFacture(this.facture)  
      .subscribe({
        next: (data) => console.log(data),
        error: ( error )=> console.log(error)});  
    this.facture = new Facture();  
  }  
   
  get FactureEmission(){  
    return this.facturesaveform.get('date_emission');  
  }  
  
  get FactureEcheance(){  
    return this.facturesaveform.get('date_echeance');  
  } 
  get FactureInitial(){  
    return this.facturesaveform.get('montant_initial');  
  }  
  
  get FactureRestant(){  
    return this.facturesaveform.get('montant_restant');  
  }  
  get FactureStatus(){  
    return this.facturesaveform.get('status');  
  } 
  get FactureDelai(){  
    return this.facturesaveform.get('delai_paimentF');  
  } 
  get FactureAssureur(){  
    return this.facturesaveform.get('garantie_assureur');  
  } 
  get FactureGaranties(){  
    return this.facturesaveform.get('autres_garanties');  
  } 
  get FactureLimite(){  
    return this.facturesaveform.get('limite_credit');  
  } 
  get FactureClient(){  
    return this.facturesaveform.get('idclient');  
  }
   
  addFactureForm(){  
    this.submitted=false;  
    this.facturesaveform.reset();  
  }  
  //OnSelectClient(ctrl)
 //  {
  //    if(ctrl.selectedIndex == 0){
  //     this.f['code_client'].setValue('');
   //   }
   //   else{
   //      this.f['code_client'].setValue(this.ClientList[ctrl.selectedIndex - 1].code_client);
   //   }
   // }
}  

