import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit() {
 
  }
  
  demandeWindowsPage(){
    this.router.navigate(['demande-windows'])
  }
  demandeNessicoPage(){
    this.router.navigate(['demande-nessico'])
  }
  demandeOraclePage(){
    this.router.navigate(['demande-oracle'])
  }
  dashboardPage(){
    this.router.navigate(['dashboard2'])
  }

}
