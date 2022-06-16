import { Component, OnInit } from '@angular/core';
import { DemandeRequest } from 'src/model/demandeRequest.model';
import { deleteDemandeRequest } from 'src/model/deleteDemandeRequest.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande-windows',
  templateUrl: './demande-windows.page.html',
  styleUrls: ['./demande-windows.page.scss'],
})

export class DemandeWindowsPage implements OnInit {
  image = '';
  today: number = Date.now();
  loginad= localStorage.getItem('loginad');
  todoList:JSON;
  TestList:JSON;
  constructor(private authservice : AuthService,private router: Router) { }

  ngOnInit() {
    this.loginad;
    this.listeDemande();
    // setInterval( () =>{
    //   this.listeDemande();
    // },20000);
  }

  dashboardPage(){
    this.router.navigate(['historique'])
  }

  deleteDemande(id:number){
    this.authservice.deleteDemandeWindows(new deleteDemandeRequest(id)).subscribe( 
      //next en cas de success
      (data) =>{
        console.log(data)
        this.listeDemande();
      },
      (error) =>{
          console.log(error)
      }
    )
  }

  listeDemande(){
    this.authservice.getDemandeWindows(new DemandeRequest('','','','','',this.loginad)).subscribe( 
    //next en cas de success
    (data) =>{
      //Aller a la page suivante 
      this.todoList = JSON.parse(data.body);
      console.log(this.todoList)

    },
    //  en cas error 
    (error) =>{
      // if(error.status==404){
        console.log(error)

    }
  )
} 

}

