import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptewindowsPageRoutingModule } from './comptewindows-routing.module';

import { ComptewindowsPage } from './comptewindows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptewindowsPageRoutingModule
  ],
  declarations: [ComptewindowsPage]
})
export class ComptewindowsPageModule {}
