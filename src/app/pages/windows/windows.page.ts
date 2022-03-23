import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.page.html',
  styleUrls: ['./windows.page.scss'],
})
export class WindowsPage implements OnInit {
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
