import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.page.html',
  styleUrls: ['./dashboard2.page.scss'],
})
export class Dashboard2Page implements OnInit {

  public menustatus: any;
  constructor(private router: Router) { }

  menuopen()
  {
   alert("function changecolor");
   this.menustatus = 'open';
  }
  notificationsPage()
  {
  this.router.navigate(['notifications'])
  }

  // menuPage(){
  //   this.router.navigate(['menu'])
  // }

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
  autresPage(){
    this.router.navigate(['autres'])
  }
  Comptewindows(){
    this.router.navigate(['comptewindows'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }

  simplissimoPage()
  {
	  this.router.navigate(['simplissimo'])
  }


  ngOnInit() {
  }

}
