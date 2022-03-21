import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaiaPageRoutingModule } from './gaia-routing.module';

import { GaiaPage } from './gaia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaiaPageRoutingModule
  ],
  declarations: [GaiaPage]
})
export class GaiaPageModule {}
