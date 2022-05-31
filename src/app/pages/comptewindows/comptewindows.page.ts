import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaladoRequest } from 'src/model/maladoRequest.model';

@Component({
  selector: 'app-comptewindows',
  templateUrl: './comptewindows.page.html',
  styleUrls: ['./comptewindows.page.scss'],
})
export class ComptewindowsPage implements OnInit {

  constructor(private router : Router,
    ) { }

  ngOnInit() {
  }

  async Deblocagecompte(){
    

 this.router.navigate(['deblocagecompte'])

}
  async Ressetpassword(){

 this.router.navigate(['ressetpasword'])

}

}
