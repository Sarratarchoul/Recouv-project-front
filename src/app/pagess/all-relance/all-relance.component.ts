import { Component, OnInit } from '@angular/core';
import { RelanceService } from '../relance.service';
import { Observable,Subject } from "rxjs";  
import { Relance } from '../relance'; 

import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'ngx-all-relance',
  templateUrl: './all-relance.component.html',
  styleUrls: ['./all-relance.component.scss']
})
export class AllRelanceComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private relanceservice:RelanceService, private http: HttpClient, private clientService:ClientService) { }  
  fileUploadUrl='http://localhost:8080/relance/relance/upload';
  relancesArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  dtTriggerc: Subject<any>= new Subject();  
  public relancess: any;
  public clientss: any;
  //relances?: Observable<Relance[]> ;  
  relances: Relance[] = [];
  relance : Relance=new Relance();  
  deleteMessage=false;    
  relDetail !: FormGroup;
  ClientList!: Client[];
  file: any;
  flag=true;
 // get f() { return this.relanceservice.formData.controls }

  ngOnInit() {   
    this.dtOptions = {  
      pageLength: 5,  
      stateSave:true,  
      lengthMenu:[[5, 15, 20, -1], [5, 15, 20, "All"]],  
      processing: true  
    };   
    this.getRelances();  
    this.relanceservice.getRelances().subscribe(data =>{  
    this.relances =data;  
    this.dtTrigger.next('');  
    }) 
    this.relanceservice.getRelances().subscribe(data =>{  
      this.relancess =data;  
      this.dtTriggerc.next('');  
      }) 
    this.relDetail = this.formBuilder.group({
      idR : [''],
      date_action : [''],
      type_action : [''],
      action : [''],
      montant_action : [''],
      idclient : ['']
    }); 
    this.clientService.getClients().subscribe(
      response =>{this.ClientList = response;}
     );
  }  
  getRelances() {
    this.relanceservice.getRelances().subscribe(res=>{
        this.relances = res;
    },err=>{
      console.log("error while fetching data.")
    });
  } 

  addRelance() {
    console.log(this.relDetail);
    this.relance.idR = this.relDetail.value.idR;
    this.relance.date_action = this.relDetail.value.date_action;
    this.relance.type_action = this.relDetail.value.type_action;
    this.relance.action = this.relDetail.value.action;
    this.relance.montant_action = this.relDetail.value.montant_action;
    this.relance.idclient = this.relDetail.value.idclient;

    this.relanceservice.addRelance(this.relance).subscribe(res=>{
        console.log(res);
        this.getRelances();
    },err=>{
        console.log(err);
    });

  }

  deleteRelance(idR: number) {  
    this.relanceservice.deleteRelance(idR)  
      .subscribe( {
        next:(data) => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.relanceservice.getRelances().subscribe(data =>{  
            this.relances =data  
            })  
        },  
        error:(error) => console.log(error)});  
  }  
  
  editRelance(rel : Relance) {
    this.relDetail.controls['idR'].setValue(rel.idR);
    this.relDetail.controls['date_action'].setValue(rel.date_action);
    this.relDetail.controls['type_action'].setValue(rel.type_action);
    this.relDetail.controls['action'].setValue(rel.action);
    this.relDetail.controls['montant_action'].setValue(rel.montant_action);
    this.relDetail.controls['idclient'].setValue(rel.idclient);
  }

  updateRelance() {

    this.relance.idR = this.relDetail.value.idR;
    this.relance.date_action = this.relDetail.value.date_action;
    this.relance.type_action = this.relDetail.value.type_action;
    this.relance.action = this.relDetail.value.action;
    this.relance.montant_action = this.relDetail.value.montant_action;
    this.relance.idclient = this.relDetail.value.idclient;
    
  
  this.relanceservice.updateRelance(this.relance).subscribe(res=>{
    console.log(res);
    this.getRelances();
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
  this.relanceservice.getExcelData().subscribe((responseMessage) => {
    let file = new Blob([responseMessage], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  })
 
}
onGetRelancesClient(code_client: number) {
  //this.currentClient=client;
  this.clientService.getRelancesClient(code_client).subscribe(
    data=>{this.relancess=data;
    },err => {
      console.log(err);
    })
      this.clientService.findClientById(code_client)
      .subscribe(data => {
        console.log(data)
        this.clientss = data;
      }, error => console.log(error));
  }
 
//OnSelectClient(ctrl)
//{
 //  if(ctrl.selectedIndex == 0){
 //   this.f['code_client'].setValue('');
 //  }
 //  else{
 //     this.f['code_client'].setValue(this.ClientList[ctrl.selectedIndex - 1].code_client);
 //  }
 //}
}  
