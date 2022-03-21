import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WindowsPageRoutingModule } from './windows-routing.module';

import { WindowsPage } from './windows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WindowsPageRoutingModule
  ],
  declarations: [WindowsPage]
})
export class WindowsPageModule {}
