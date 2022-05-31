import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MaladoRequest } from 'src/model/maladoRequest.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  loginAd= localStorage.getItem('loginAd');

  Userdata = {
    nom: '',
    prenom: '',
   // email: '',
   // login: ''
  };

  constructor(private router: Router,private authservice:AuthService) { }
  ngOnInit() {
    // setInterval( () =>{
    //   this.getataUser()
    // },0);
  }
  // getataUser() {
  //   this.authservice.dataUser(new MaladoRequest('', '', '', '', this.loginAd)).subscribe( 
  //     (data)=>{
  //      //console.log(data)
  //      data = JSON.parse(data);
  //      console.log(data)
  //      this.Userdata.nom = data['firstName'];
  //      this.Userdata.prenom = data['lastName'];
  //      //this.Userdata.email = data['email'];
  //      //this.Userdata.login = data['loginad'];

  //     }
  //   )
  // }

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
