import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { MaladoRequest } from 'src/app/models/maladoRequest.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  loginAd= localStorage.getItem('loginAd');

  Userdata = {
    nom: '',
    prenom: '',
    email: '',
    login: ''
  };

  constructor(private router: Router,private http: HttpClient,private authservice:AuthService) { }
  dashboardPage()
  {
	   this.router.navigate(['dashboard2'])
  }
   notificationsPage()
  {
  this.router.navigate(['notifications'])
  }
  ngOnInit() {
    this.getataUser()
  }

  getataUser() {
    this.authservice.dataUser(new MaladoRequest('', '', '', '', this.loginAd)).subscribe( 
      (data)=>{
       //console.log(data)
       data = JSON.parse(data);
       console.log(data)
       this.Userdata.nom = data['firstName'];
       this.Userdata.prenom = data['lastName'];
       this.Userdata.email = data['email'];
       this.Userdata.login = data['loginad'];

      }
    )
  }



}
