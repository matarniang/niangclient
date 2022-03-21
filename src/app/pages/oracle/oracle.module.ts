import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OraclePageRoutingModule } from './oracle-routing.module';

import { OraclePage } from './oracle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OraclePageRoutingModule
  ],
  declarations: [OraclePage]
})
export class OraclePageModule {}
