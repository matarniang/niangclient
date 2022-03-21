import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NessicoPageRoutingModule } from './nessico-routing.module';

import { NessicoPage } from './nessico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NessicoPageRoutingModule
  ],
  declarations: [NessicoPage]
})
export class NessicoPageModule {}
