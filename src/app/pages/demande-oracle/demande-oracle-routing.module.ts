import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeOraclePage } from './demande-oracle.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeOraclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeOraclePageRoutingModule {}
