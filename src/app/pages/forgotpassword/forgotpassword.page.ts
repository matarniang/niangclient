import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaladoRequest } from 'src/model/maladoRequest.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  emailField:string
  isAlert=false;
  alertMsg="merci de derifier"
  loginAd= localStorage.getItem('loginAd');
  
  constructor(private router : Router,
    private authservice : AuthService
   ) {}

  ngOnInit() {

  }

  AuthentificationPage()
  {
   this.router.navigate(['connexion'])
  }
  
  // forgotpassword(){
  //     this.authservice.forgotpassword(new MaladoRequest('', '', this.emailField, '',this.loginAd)).subscribe( 
  //     //next en cas de success
  //     (data: string) =>{
  //       //Aller a la page suivante 
  //       // console.log("Login valide")
  //       console.log(data)
  //       localStorage.setItem('loginAd',this.loginAd);
  //       //this.show()
  //       this.router.navigate(['changepassword'])
 
  //     },
  //     //  en cas error 
  //     (error) =>{
  //       if(error.status==404){
          
  //         this.alertMsg="loginad n'existe pas dans la base"
  //         this.isAlert = true;
  //       }
  //       else if (error.status==500){
  //         this.alertMsg="loginad obligatoir"
  //         this.isAlert = true;
  //       }
  //       else{
  //         this.alertMsg="verifier votre connexion"
  //         this.isAlert = true;
  //       }
  //     }
  //   )
  // }  

}
