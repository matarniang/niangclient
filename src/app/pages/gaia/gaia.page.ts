import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gaia',
  templateUrl: './gaia.page.html',
  styleUrls: ['./gaia.page.scss'],
})
export class GaiaPage implements OnInit {
  image='';
  constructor(private router: Router) { }

  ngOnInit() {
    setInterval( () =>{
      this.getImage();
    },0);
  }

  getImage(){
    this.image=localStorage.getItem('image');
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
