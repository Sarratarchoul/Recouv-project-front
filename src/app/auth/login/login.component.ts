
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/pages/utilisateur';
import { UtilisateurService } from 'src/app/pages/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  utilisateur: any={};
  errorMessage?:string;
  nom ?: string;
  Wdate: any;
  annee? : 0;
  loginForm!: FormGroup;

  constructor(private router:Router,private  utilisateurservice : UtilisateurService,
    public toastr: ToastrService,private datePipe : DatePipe,public fb: FormBuilder) { }
  ngOnInit() {
     this.utilisateurservice.islogin = false;
     this.utilisateurservice.admin = false;
     this.utilisateurservice.client = false;
     this.utilisateurservice.four = false;
     this.utilisateurservice.suser= false;


     this.loginForm = this.fb.group({
      'email' : ['', Validators.required],
      'password' : ['', Validators.required]
    });
  }
  login() {
    const val = this.loginForm?.value ;
   this.utilisateurservice.login(val.email,val.password).subscribe(
      res =>{
      this.utilisateur = res;
      if (this.utilisateur.password   == val.password )
      {
        localStorage.setItem("email", this.utilisateur.email);
        localStorage.setItem("nom", this.utilisateur.nom);
        localStorage.setItem("prenom", this.utilisateur.prenom);
        localStorage.setItem("id_utilisateur", this.utilisateur.id_utilisateur);
        localStorage.setItem("role", this.utilisateur.role);
        this.utilisateurservice.islogin = true;
        if (this.utilisateur.role  == "ADMINISTRATEUR")
         {
         this.utilisateurservice.admin = true;
          this.router.navigate(['/pages']);
      }
      else if (this.utilisateur.role = "COMMERCIAL")
      {
        this.utilisateurservice.four = true;

        this.router.navigate(['/pagess']);
      }
      else if (this.utilisateur.role = "CREDITMANAGER")
      {
        this.utilisateurservice.four = true;

        this.router.navigate(['/pagess']);
      }
      else if (this.utilisateur.role = "CHARGERECOUVREMENT")
      {
        this.utilisateurservice.four = true;

        this.router.navigate(['/pagess']);
      }
      
    }
    else
    {
      this.toastr.warning( 'Mot de Passe Incorrecte ')
    }
          },
          error =>

            this.toastr.warning( 'Login Incorrecte ')


          );
        }


register()
{
  this.router.navigate(['/register']);
}

        logOut() {
          localStorage.removeItem("nom");
        }



    transformDate(date){
      return this.datePipe.transform(date, 'yyyy-MM-dd');
    }
    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('nom');

  }
}