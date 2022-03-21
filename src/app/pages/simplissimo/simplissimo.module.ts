import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimplissimoPageRoutingModule } from './simplissimo-routing.module';

import { SimplissimoPage } from './simplissimo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimplissimoPageRoutingModule
  ],
  declarations: [SimplissimoPage]
})
export class SimplissimoPageModule {}
