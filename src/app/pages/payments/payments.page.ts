import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private router: Router) { }
  dashboardPage()
  {
   this.router.navigate(['dashboard'])
  }
   notificationsPage()
  {
  this.router.navigate(['notifications'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }
  ngOnInit() {

  }
  scanCode()
  {
    this.barcodeScanner.scan().then(barcodeData => {
  // success. barcodeData is the data returned by scanner
}).catch(err => {
  // error
});
  }

}
