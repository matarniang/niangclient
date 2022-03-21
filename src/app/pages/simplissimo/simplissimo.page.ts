import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-simplissimo',
  templateUrl: './simplissimo.page.html',
  styleUrls: ['./simplissimo.page.scss'],
})
export class SimplissimoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  dashboardPage()
  {
	   this.router.navigate(['dashboard2'])
  }
}
