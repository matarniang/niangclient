import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nessico',
  templateUrl: './nessico.page.html',
  styleUrls: ['./nessico.page.scss'],
})
export class NessicoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  dashboardPage()
  {
	   this.router.navigate(['dashboard2'])
  }
  notificationsPage()
  {
  this.router.navigate(['notifications'])
  }

  profilePage()
  {
	  this.router.navigate(['profile'])
  }
}
