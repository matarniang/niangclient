import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaladoRequest } from 'src/app/models/maladoRequest.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loginadField:string
  passwordField:string
  donner:string
  correctPassword = true;

  showPassword= false;
  passwordToggleIcon= 'eye'
  userIcon = 'person'
  isAlert=false;
  alertMsg="coucou"
  
  constructor(private router: Router,
  private authservice : AuthService,) { }

  ngOnInit() {
  }


  togglePassword():void {
    this.showPassword =! this.showPassword;

    if (this.passwordToggleIcon=='eye'){
      this.passwordToggleIcon ='eye-off';
    }else{
      this.passwordToggleIcon='eye';
    }
  }

  

homePage()
  {
  this.router.navigate(['home'])
  }


Connexion(){
  this.authservice.connexion(new MaladoRequest('', '', '', this.passwordField, this.loginadField)).subscribe( 
    //next en cas de success
    (data) =>{
        this.donner = JSON.parse(data);
        console.log(this.donner)
        localStorage.setItem('loginAd', this.loginadField)
        if (this.donner['code']==200) {
          this.router.navigate(['dashboard2'])
        }else
        this.router.navigate(['connexion'])
    },
    (error) =>{
      if(error.status==404){
        
        this.alertMsg="login ou mot de passe n'existe pas"
        this.isAlert = true;
      }
      else if (error.status==500){
        this.alertMsg="loginad et mot de passe obligatoir"
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



