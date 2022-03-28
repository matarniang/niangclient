import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-oracle',
  templateUrl: './oracle.page.html',
  styleUrls: ['./oracle.page.scss'],
})
export class OraclePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  dashboardPage()
  {
	   this.router.navigate(['dashboard2'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }
  notificationsPage()
  {
  this.router.navigate(['notifications'])
  }
}
