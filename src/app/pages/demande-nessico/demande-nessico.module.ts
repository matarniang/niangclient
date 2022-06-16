import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeNessicoPageRoutingModule } from './demande-nessico-routing.module';

import { DemandeNessicoPage } from './demande-nessico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeNessicoPageRoutingModule
  ],
  declarations: [DemandeNessicoPage]
})
export class DemandeNessicoPageModule {}
