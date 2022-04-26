import { Component, OnInit } from '@angular/core';
// import { DemandeRequest } from 'src/app/models/demandeRequest.model';
// import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit {
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

  dashboardPage(){
    this.router.navigate(['dashboard2'])
  }

}
