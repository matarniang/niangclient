import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeWindowsPage } from './demande-windows.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeWindowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeWindowsPageRoutingModule {}
