import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeWindowsPageRoutingModule } from './demande-windows-routing.module';

import { DemandeWindowsPage } from './demande-windows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeWindowsPageRoutingModule
  ],
  declarations: [DemandeWindowsPage]
})
export class DemandeWindowsPageModule {}
