import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpasswordPageRoutingModule } from './forgotpassword-routing.module';

import { ForgotpasswordPage } from './forgotpassword.page';
import { Ng2OdometerModule } from 'ng2-odometer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpasswordPageRoutingModule,
	Ng2OdometerModule.forRoot()
  ],
  declarations: [ForgotpasswordPage]
})
export class ForgotpasswordPageModule {}
