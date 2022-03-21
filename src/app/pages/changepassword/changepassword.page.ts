import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MaladoRequest } from 'src/app/models/maladoRequest.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  confirmdField = ''
  passwordChamp = ''
  isActivated = false;
  isFirstConnection = true;
  loginAd= localStorage.getItem('loginAd');
  token= localStorage.getItem('token')
  loginField:string
  hasPassword = true;
 
  constructor(private router: Router,
     private alerteCtrl: AlertController,
     private authservice: AuthService,
     public alertController : AlertController
      ) { }
  dashboardPage()
  {
   this.router.navigate(['dashboard'])
  }
   notificationsPage()
  {
  this.router.navigate(['notifications'])
  }
  loginPage()
  {
	   this.router.navigate(['login-ad'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }

  ngOnInit() {
    this.isEnabled(enabled => {
       if (this.isActivated){
         //le compte est activé
        this.checkConnection(hasPassword => {
          if (hasPassword) {
            // il a déja un mot de passe
            this.router.navigate(['login'])
            //this.presentAlert();
          } else {
            // il n'a pas encore de mot de passe.
            this.router.navigate(['changepassword'])
          }
        })
       } else {
         // il n'a pas encore validé son compte et/ou son lien a expiré
         // vérifier si le token is toujours actif.
          //this.tokenValidation()
          setInterval(() => {
            this.isEnabled(enabled =>{
              if (this.isActivated){
                //le compte vient d'être activé
                this.hasPassword = false;
              }
            })
          },5000); 
       }
    })
      
  }

  

   /* tokenValidation() {
   // alert(this.token)
    this.authservice.tokenValidation(new MaladoRequest('', '', '', '', this.token)).subscribe(
      () =>{
        //rediriger vers la page d'accueil
      alert("un mail vous a ete envoyé, Veuillez confirmer pour continuer")
      }
    )
  } */

   checkConnection(cb) {
    this.authservice.passwordVerification(new MaladoRequest('', '', '', '', this.loginAd)).subscribe( 
      (data)=>{
        this.hasPassword = data === 'true' ? true : false;
        return cb(data === 'true' ? true : false)
      }
    )
  }

  isEnabled(cb) {
      this.authservice.isEnabled(new MaladoRequest('', '', '', '', this.loginAd)).subscribe( 
      (data) => {
        this.isActivated = data === 'true' ? true : false;
        cb(this.isActivated)
      })
   }

   confirmpassword(){
      this.authservice.confirmpassword(new MaladoRequest('', '','',this.passwordChamp,this.loginAd)).subscribe(
        (data) =>{
          console.log(data)
          localStorage.setItem('loginAd', this.loginField)
          this.router.navigate(['dashboard2'])
          
        },
        (error) =>{
          console.log("erreur password")
          console.log(error.message)
        }
          
      )
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alertDanger',
      // header: 'Alert',
      // subHeader: 'Subtitle',
      message: "Compte deja exister",
      buttons: ['OK']
    });

    await alert.present();

}
}
