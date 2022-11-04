import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/pages/utilisateur';
import { UtilisateurService } from 'src/app/pages/utilisateur.service';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl,Validators }
from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  constructor(public utilisateurService: UtilisateurService ,public fb: FormBuilder,public toastr: ToastrService) { }
    
  utilisateur:Utilisateur= new Utilisateur(); 
  submitted = false;  
  userFile;
  public imagePath;
  imgURL: any;
  pwdd !:string;
  acceptTerms !: string; 
    ngOnInit() {  
      this.submitted=false;  
    }  
    
    utilisateursaveform=new FormGroup({  
      prenom:new FormControl('' , [Validators.required , Validators.minLength(2) ] ), 
      nom:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),  
      email:new FormControl('',[Validators.required,Validators.email]),  
      role:new FormControl(),  
      telephone:new FormControl('' , [Validators.required , Validators.minLength(8) ] ),
      image:new FormControl(), 
      password:new FormControl('' , [Validators.required , Validators.minLength(3) ] )
    });  
    
    addUtilisateur(){  
    
    this.submitted = true;
    const val = this.utilisateursaveform.value;
  
        this.save();
  }
  
   
  
    
    save() {  
      const formData = new FormData();
      
      const utilisateurs = this.utilisateursaveform.value;
      formData.append('utilisateur', JSON.stringify(utilisateurs));
      formData.append('file', this.userFile);
      this.utilisateurService.addUtilisateur(formData).subscribe( data => {
        this.toastr.success( 'Validation Faite avec Success');
      });
    }
    get UtilisateurPrenom(){  
      return this.utilisateursaveform.get('prenom');  
    }  
    
    get UtilisateurNom(){  
      return this.utilisateursaveform.get('nom');  
    } 
    get UtilisateurEmail(){  
      return this.utilisateursaveform.get('email');  
    }  
    
    get UtilisateurRole(){  
      return this.utilisateursaveform.get('role');  
    }  
    get UtilisateurTelephone(){  
      return this.utilisateursaveform.get('telephone');  
    } 
    get UtilisateurImage(){  
      return this.utilisateursaveform.get('image');  
    } 
    get UtilisateurPassword(){  
      return this.utilisateursaveform.get('password');  
    } 
    addUtilisateurForm(){  
      this.submitted=false;  
      this.utilisateursaveform.reset();  
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
  