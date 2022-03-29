import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.page.html',
  styleUrls: ['./dashboard2.page.scss'],
})
export class Dashboard2Page implements OnInit {

  public menustatus: any;
  constructor(private router: Router,private menu: MenuController,private http: HttpClient) { }

  menuopen()
  {
   alert("function changecolor");
   this.menustatus = 'open';
  }
  openCustom() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }

  
  windowsPage(){
    this.router.navigate(['windows'])
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
  // autresPage(){
  //   this.router.navigate(['autres'])
  // }
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
    //this.menu.close('main-menu')
  }


  ngOnInit() {
  }


}
