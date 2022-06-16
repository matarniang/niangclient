import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeNessicoPage } from './demande-nessico.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeNessicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeNessicoPageRoutingModule {}
