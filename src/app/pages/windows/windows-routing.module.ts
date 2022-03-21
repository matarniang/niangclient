import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WindowsPage } from './windows.page';

const routes: Routes = [
  {
    path: '',
    component: WindowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WindowsPageRoutingModule {}
