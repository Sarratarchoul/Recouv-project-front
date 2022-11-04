import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
import { Observable,Subject } from "rxjs";  
import { Utilisateur } from '../utilisateur'; 
import { ToastrService } from 'ngx-toastr';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';  
@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './all-utilisateur.component.html',
  styleUrls: ['./all-utilisateur.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .utilisateur-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `]
})
export class ListUtilisateurComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, public utilisateurservice:UtilisateurService,public toastr: ToastrService) { }  
 
  utilisateursArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  submitted = false;
  //utilisateurs?: Observable<Utilisateur[]> ;  
   utilisateurs: Utilisateur[] = [];
  utilisateur : Utilisateur=new Utilisateur();  
  deleteMessage=false;  
  isupdated = false;      
  utiDetail !: FormGroup;
  userFile;
  public imagePath;
  imgURL: any;
  pwdd !:string;
  acceptTerms !: string;
  ngOnInit() {  
    
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 5,  
      stateSave:true,  
      lengthMenu:[[5, 15, 20, -1], [5, 15, 20, "All"]],  
      processing: true  
    };     
    this.utilisateurservice.getUtilisateurs().subscribe(data =>{  
    this.utilisateurs =data;  
    this.dtTrigger.next('');  
    })  
    this.utiDetail = this.formBuilder.group({
      id_utilisateur : [''],
      prenom : [''],
      nom : [''],
      email : [''],
      telephone : [''],
      image : [''],
      password : [''],
      actif : [''],
      supprimer : [''],
      role : ['']
    }); 
  } 

  getUtilisateurs() {
    this.utilisateurservice.getUtilisateurs().subscribe(res=>{
        this.utilisateurs = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }
  deleteUtilisateur(id_utilisateur: number) {  
    this.utilisateurservice.deleteUtilisateur(id_utilisateur)  
      .subscribe( {
        next:(data) => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.utilisateurservice.getUtilisateurs().subscribe(data =>{  
            this.utilisateurs =data  
            })  
        },  
        error:(error) => console.log(error)});  
  }  
    
  editUtilisateur(uti : Utilisateur) {
    this.utiDetail.controls['id_utilisateur'].setValue(uti.id_utilisateur);
    this.utiDetail.controls['prenom'].setValue(uti.prenom);
    this.utiDetail.controls['nom'].setValue(uti.nom);
    this.utiDetail.controls['email'].setValue(uti.email);
    this.utiDetail.controls['role'].setValue(uti.role);
    this.utiDetail.controls['telephone'].setValue(uti.telephone);
    this.utiDetail.controls['image'].setValue(uti.image);
    this.utiDetail.controls['password'].setValue(uti.password);
    this.utiDetail.controls['actif'].setValue(uti.actif);
    this.utiDetail.controls['supprimer'].setValue(uti.supprimer);
  }

  updateUtilisateur() {
  
   
    const formData = new FormData();
    const utilisateurs = this.utiDetail.value;
    formData.append('utilisateur', JSON.stringify(utilisateurs));
    formData.append('file', this.userFile);
  this.utilisateurservice.updateUtilisateur(formData).subscribe(res=>{
    console.log(res);
    this.toastr.success('Modification Faite avec Success');
    this.utilisateurservice.getUtilisateurs().subscribe(response =>{this.utilisateurservice.list = response ;})
    ;
  })

}
Update() {

  this.utilisateur.id_utilisateur = this.utiDetail.value.id_utilisateur;
this.utilisateur.prenom = this.utiDetail.value.prenom;
this.utilisateur.nom = this.utiDetail.value.nom;
this.utilisateur.email = this.utiDetail.value.email;
this.utilisateur.role = this.utiDetail.value.role;
this.utilisateur.telephone = this.utiDetail.value.telephone;
this.utilisateur.image = this.utiDetail.value.image;
this.utilisateur.password = this.utiDetail.value.password;
this.utilisateur.actif = this.utiDetail.value.actif;
this.utilisateur.supprimer = this.utiDetail.value.supprimer;
  

this.utilisateurservice.update(this.utilisateur).subscribe(res=>{
  console.log(res);
  this.getUtilisateurs();
},err=>{
  console.log(err);
})

}

onSelectFile(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.userFile = file;
    // this.f['profile'].setValue(file);

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.toastr.success('Only images are supported.');

      return;
    }
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
}

}  