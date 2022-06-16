import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeOraclePageRoutingModule } from './demande-oracle-routing.module';

import { DemandeOraclePage } from './demande-oracle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeOraclePageRoutingModule
  ],
  declarations: [DemandeOraclePage]
})
export class DemandeOraclePageModule {}
