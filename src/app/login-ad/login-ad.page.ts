import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaladoRequest } from 'src/model/maladoRequest.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-ad',
  templateUrl: './login-ad.page.html',
  styleUrls: ['./login-ad.page.scss'],
})
export class LoginAdPage implements OnInit {
  loginField:string
  isAlert=false;
  alertMsg="merci de derifier"
  constructor(private router : Router,
    private authservice : AuthService,
  
   ) {}

  ngOnInit() {
  }
  AuthentificationPage()
  {
   this.router.navigate(['connexion'])
  }
  loginad(){
      this.authservice.loginad(new MaladoRequest('', '', '', '', this.loginField)).subscribe( 
      //next en cas de success
      (data) =>{
        //Aller a la page suivante 
        console.log("Login valide")
        console.log(data)
        // localStorage.setItem('loginAd',this.loginField);
        //this.show()
        // this.router.navigate(['changepassword'])
      },
      //  en cas error 
      (error) =>{
        if(error.status==404){
          
          this.alertMsg="loginad n'existe pas dans la base"
          this.isAlert = true;
        }
        else if (error.status==500){
          this.alertMsg="loginad obligatoir"
          this.isAlert = true;
        }
        else{
          this.alertMsg="verifier votre connexion"
          this.isAlert = true;
        }
      }
    )
  }  
  }




 


