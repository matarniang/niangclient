import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.page.html',
  styleUrls: ['./windows.page.scss'],
})
export class WindowsPage implements OnInit {
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
