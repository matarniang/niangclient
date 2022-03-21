import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

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

  Comptewindows(){
    this.router.navigate(['comptewindows'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }
  ngOnInit() {
   
  }

  

}
