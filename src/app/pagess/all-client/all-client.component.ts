import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import {  Observable,Subject, throwError } from "rxjs";  
import { Client } from '../client'; 
import { catchError } from 'rxjs/operators';
import {FormControl,FormGroup,FormBuilder,} from '@angular/forms';  
import { RelanceService } from '../relance.service';
import { FactureService } from '../facture.service';
import { HttpClient } from '@angular/common/http';
//import { Relance } from '../relance';
@Component({
  selector: 'ngx-all-client',
  templateUrl: './all-client.component.html',
  styleUrls: ['./all-client.component.scss']
})
export class AllClientComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private clientservice:ClientService, private http: HttpClient, private relanceservice:RelanceService, private factureservice:FactureService) { }  
  fileUploadUrl='http://localhost:8080/client/client/upload';
  public currentClient?: Client;

  public relances: any;
  public factures: any;
  public clientss: any;
  clientsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTriggerc: Subject<any>= new Subject();   
  dtTriggerr: Subject<any>= new Subject(); 
  dtTriggerf: Subject<any>= new Subject(); 
  
   clients?: Client[];
  client : Client=new Client();  
  deleteMessage=false;  
  clientlist: any;  
  isupdated = false;      
  cliDetail !: FormGroup;
  file: any;
  flag=true;
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 5,  
      stateSave:true,  
      lengthMenu:[[5, 15, 20, -1], [5, 15, 20, "All"]],  
      processing: true  
    };  
    this.clientservice.getClients().subscribe(data =>{  
    this.clients =data;  
    this.dtTriggerc.next('');  
    })
    this.relanceservice.getRelances().subscribe(data =>{  
      this.relances =data;  
      this.dtTriggerr.next('');  
      }) 
      this.factureservice.getFactures().subscribe(data =>{  
        this.factures =data;  
        this.dtTriggerf.next('');  
        }) 
    this.cliDetail = this.formBuilder.group({
      code_client : [''],
      nom_client : [''],
      senario_relance : [''],
      adresse_client : [''],
      email : [''],
      profil_payeur : [''],
      numTel : [''],
      personne_contact : [''],
      nom_groupe : [''],
      moyen_de_paiement : ['']
    });
  }  
  getClients() {
    this.clientservice.getClients().subscribe(res=>{
        this.clients = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }  
  deleteClient(code_client: number) {  
    this.clientservice.deleteClient(code_client)  
      .subscribe( {
        next:(data) => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.clientservice.getClients().subscribe(data =>{  
            this.clients =data  
            })  
        },  
        error:(error) => console.log(error)});  
  }  
  
  editClient(cli : Client) {
    this.cliDetail.controls['code_client'].setValue(cli.code_client);
    this.cliDetail.controls['nom_client'].setValue(cli.nom_client);
    this.cliDetail.controls['senario_relance'].setValue(cli.senario_relance);
    this.cliDetail.controls['adresse_client'].setValue(cli.adresse_client);
    this.cliDetail.controls['email'].setValue(cli.email);
    this.cliDetail.controls['profil_payeur'].setValue(cli.profil_payeur);
    this.cliDetail.controls['numTel'].setValue(cli.numTel);
    this.cliDetail.controls['personne_contact'].setValue(cli.personne_contact);
    this.cliDetail.controls['nom_groupe'].setValue(cli.nom_groupe);
    this.cliDetail.controls['moyen_de_paiement'].setValue(cli.moyen_de_paiement);
  }

  updateClient() {

    this.client.code_client = this.cliDetail.value.code_client;
    this.client.nom_client = this.cliDetail.value.nom_client;
    this.client.senario_relance = this.cliDetail.value.senario_relance;
    this.client.adresse_client = this.cliDetail.value.adresse_client;
    this.client.email = this.cliDetail.value.email;
    this.client.profil_payeur = this.cliDetail.value.profil_payeur;
    this.client.numTel = this.cliDetail.value.numTel;
    this.client.personne_contact = this.cliDetail.value.personne_contact;
    this.client.nom_groupe = this.cliDetail.value.nom_groupe;
    this.client.moyen_de_paiement = this.cliDetail.value.moyen_de_paiement;

    
  
  this.clientservice.updateClient(this.client).subscribe(res=>{
    console.log(res);
    this.getClients();
  },err=>{
    console.log(err);
  })

}

onGetRelancesClient(code_client: number) {
  //this.currentClient=client;
  this.clientservice.getRelancesClient(code_client).subscribe(
    data=>{this.relances=data;
    },err => {
      console.log(err);
    })
    this.clientservice.getFacturesClient(code_client).subscribe(
      data=>{this.factures=data;
      },err => {
        console.log(err);
      })
      this.clientservice.findClientById(code_client)
      .subscribe(data => {
        console.log(data)
        this.clientss = data;
      }, error => console.log(error));
  }
 
selectFile(event){
  this.file = event.target.files[0];
  console.log(this.file)
}
uploadFile(){
  let formData = new FormData();
  formData.append('file', this.file);
  this.flag = false;
  this.http.post(this.fileUploadUrl, formData).subscribe(
    (data:any) => {
      console.log(data);
      this.flag = true;
      alert(data.message);
    },
    (error) => {
      console.log(error);
      this.flag = true;
      alert('Le fichier est téléchargé');
    }
    );
    
}
exporToExcel() {
  this.clientservice.getExcelData().subscribe((responseMessage) => {
    let file = new Blob([responseMessage], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  })
 
}
}  