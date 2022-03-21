import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
public url1: string = "";

  constructor(private router: Router) { }
   dashboardPage()
  {
  this.router.navigate(['dashboard']);
  }
  paymentsPage()
  {
  this.router.navigate(['payments']);
  }
  historyPage()
  {
  this.router.navigate(['history']);
  }
  settingsPage()
  {
  this.router.navigate(['settings']);
  }
  profilePage()
  {
  this.router.navigate(['profile']);
  }
  logoutPage()
  {
	  this.router.navigate(['login'])
  }
  // ConnexionPage()
  // {
	//   this.router.navigate(['connexion'])
  // }
  ngOnInit() {
	  
	 this.url1 = this.router.url;   
  }

}
