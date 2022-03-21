import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }
  dashboardPage()
  {
	   this.router.navigate(['dashboard2'])
  }
   notificationsPage()
  {
  this.router.navigate(['notifications'])
  }
  ngOnInit() {
  }

}
