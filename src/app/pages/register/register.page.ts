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
  constructor(private router: Router,
    private authservice : AuthService,) { }

  ngOnInit() {
  }

homePage()
  {
  this.router.navigate(['home'])
  }

  Connexion(){
    this.authservice.maladoconnexion(new MaladoRequest('', '', '', this.passwordField, this.loginadField)).subscribe( 
      (data) =>{
        
        this.donner = JSON.parse(data);
        console.log(this.donner)
        localStorage.setItem('loginAd', this.loginadField)
        if (this.donner['code']==200) {
          this.router.navigate(['dashboard2'])
        }else
        this.router.navigate(['connexion'])
        
        
     
      }
  )

}



}
