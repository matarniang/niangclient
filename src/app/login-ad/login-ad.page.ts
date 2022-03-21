import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MaladoRequest } from 'src/app/models/maladoRequest.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-ad',
  templateUrl: './login-ad.page.html',
  styleUrls: ['./login-ad.page.scss'],
})
export class LoginAdPage implements OnInit {
  loginField:string

  constructor(private router : Router,
    private authservice : AuthService,
    private alerteCtrl : AlertController,
    private loadingCtrl : LoadingController
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
      (data: string) =>{
        //Aller a la page suivante 
        console.log("Login valide")
        console.log(data)
        localStorage.setItem('loginAd',this.loginField);
        //this.show()
        this.router.navigate(['changepassword'])
 
      },
      //  en cas error 
      (error) =>{
        //Afficher un message d'erreur
        console.log("Ereur Login")
        console.log(error)
        console.log(error.message)
      },
    )
  }  
  }




 


