import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { DemandeRequest } from 'src/app/models/demandeRequest.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.page.html',
  styleUrls: ['./dashboard2.page.scss'],
})
export class Dashboard2Page implements OnInit {
  image='';
  public menustatus: any;
  constructor(private router: Router,private authservice : AuthService,private menu: MenuController,private http: HttpClient) { }
  ngOnInit() {
    setInterval( () =>{
      this.getImage();
    },0);
  }

  getImage(){
    this.image=localStorage.getItem('image');
  }

  openCustom() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }

  settings
  windowsPage(){
    this.router.navigate(['windows'])
  }
  setting(){
    this.router.navigate(['settings'])
  }
  nessicoPage(){
    this.router.navigate(['nessico'])
  }

  oraclePage(){
    this.router.navigate(['oracle'])
  }

  gaiaPage(){
    this.router.navigate(['gaia'])
  }
  
  Comptewindows(){
    this.router.navigate(['comptewindows'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }
  notificationsPage()
  {
  this.router.navigate(['notifications'])
  }

  simplissimoPage()
  {
	  this.router.navigate(['simplissimo'])
  }

  AuthentificationPage(){
    this.router.navigate(['connexion'])
  }

  demande(action:string,application:string,loginad:string,password:string){
    this.authservice.demande(new DemandeRequest(action, application, loginad, password)).subscribe( 
    //next en cas de success
    (data: string) =>{
      //Aller a la page suivante 
      console.log(data)
      //localStorage.setItem('loginAd',this.loginField);
      
    },
    //  en cas error 
    (error) =>{
      // if(error.status==404){
        console.log(error)
        
      //   this.alertMsg="loginad n'existe pas dans la base"
      //   this.isAlert = true;
      // }
      // else if (error.status==500){
      //   this.alertMsg="loginad obligatoir"
      //   this.isAlert = true;
      // }
      // else{
      //   this.alertMsg="verifier votre connexion"
      //   this.isAlert = true;
      // }
    }
  )
} 


}
