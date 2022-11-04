import { Component, OnInit } from '@angular/core';
import { FactureService } from '../facture.service';
import { Observable,Subject } from "rxjs";  
import { Facture } from '../facture'; 

import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { Client } from '../client';
import { ClientService } from '../client.service';
@Component({
  selector: 'ngx-all-facture',
  templateUrl: './all-facture.component.html',
  styleUrls: ['./all-facture.component.scss']
})
export class AllFactureComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private factureservice:FactureService, private http: HttpClient, private clientService:ClientService) { }  
  fileUploadUrl='http://localhost:8080/facture/facture/upload';
  facturesArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  dtTriggerf: Subject<any>= new Subject();  
   factures: Facture[] = [];
  facture : Facture=new Facture();  
  deleteMessage=false;  
  facturelist: any;  
  isupdated = false;      
  facDetail !: FormGroup;
  file: any;
  flag=true;
  ClientList!: Client[];
  public facturess: any;
  public clientss: any;
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 5,  
      stateSave:true,  
      lengthMenu:[[5, 15, 20, -1], [5, 15, 20, "All"]],  
      processing: true  
    };     
    this.factureservice.getFactures().subscribe(data =>{  
    this.factures =data;  
    this.dtTrigger.next('');  
    }) 
    this.factureservice.getFactures().subscribe(data =>{  
      this.facturess =data;  
      this.dtTriggerf.next('');  
      }) 
    this.facDetail = this.formBuilder.group({
      date_emission : [''],
      date_echeance : [''],
      montant_initial : [''],
      montant_restant : [''],
      status : [''],
      delai_paimentF : [''],
      garantie_assureur : [''],
      autres_garanties : [''],
      limite_credit : [''],
      idclient : ['']
    });  
     this.clientService.getClients().subscribe( response =>{
        this.ClientList = response;
        console.log(this.ClientList);
      }
     );
  }  
  
  getFactures() {
    this.factureservice.getFactures().subscribe(res=>{
        this.factures = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
  
  deleteFacture(num_facture: number) {  
    this.factureservice.deleteFacture(num_facture)  
      .subscribe( {
        next:(data) => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.factureservice.getFactures().subscribe(data =>{  
            this.factures =data  
            })  
        },  
        error:(error) => console.log(error)});  
  }  
  
  editFacture(fac : Facture) {
    this.facDetail.controls['date_emission'].setValue(fac.date_emission);
    this.facDetail.controls['date_echeance'].setValue(fac.date_echeance);
    this.facDetail.controls['montant_initial'].setValue(fac.montant_initial);
    this.facDetail.controls['montant_restant'].setValue(fac.montant_restant);
    this.facDetail.controls['status'].setValue(fac.status);
    this.facDetail.controls['delai_paimentF'].setValue(fac.delai_paimentF);
    this.facDetail.controls['garantie_assureur'].setValue(fac.garantie_assureur);
    this.facDetail.controls['autres_garanties'].setValue(fac.autres_garanties);
    this.facDetail.controls['limite_credit'].setValue(fac.limite_credit);
    this.facDetail.controls['idclient'].setValue(fac.idclient);
  }

  updateFacture() {

    this.facture.date_emission = this.facDetail.value.date_emission;
    this.facture.date_echeance = this.facDetail.value.date_echeance;
    this.facture.montant_initial = this.facDetail.value.montant_initial;
    this.facture.montant_restant = this.facDetail.value.montant_restant;
    this.facture.status = this.facDetail.value.status;
    this.facture.delai_paimentF = this.facDetail.value.delai_paimentF;
    this.facture.garantie_assureur = this.facDetail.value.garantie_assureur;
    this.facture.autres_garanties = this.facDetail.value.autres_garanties;
    this.facture.limite_credit = this.facDetail.value.limite_credit;
    this.facture.idclient = this.facDetail.value.idclient;
    
  
  this.factureservice.updateFacture(this.facture).subscribe(res=>{
    console.log(res);
    this.getFactures();
  },err=>{
    console.log(err);
  })

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
  this.factureservice.getExcelData().subscribe((responseMessage) => {
    let file = new Blob([responseMessage], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  })
 
}
onGetFacturesClient(code_client: number) {
  //this.currentClient=client;
    this.clientService.getFacturesClient(code_client).subscribe(
      data=>{this.facturess=data;
      },err => {
        console.log(err);
      })
      this.clientService.findClientById(code_client)
      .subscribe(data => {
        console.log(data)
        this.clientss = data;
      }, error => console.log(error));
  }
///OnSelectClient(ctrl)
 //{
 //  if(ctrl.selectedIndex == 0){
  //  this.f['code_client'].setValue('');
 //  }
 //  else{
 //     this.f['code_client'].setValue(this.ClientList[ctrl.selectedIndex - 1].code_client);
 //  }
// }
 //calculateDiff(sentOn: Date) {
 // var todayDate = new Date(this.facture.date_emission);
 // var sentOnDate = new Date(sentOn);
 //// sentOnDate.setDate(sentOnDate.getDate());
  //var differenceInTime = todayDate.getTime() - sentOnDate.getTime();
//  // To calculate the no. of days between two dates
//  var differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
 // return differenceInDays;
//} 
}  