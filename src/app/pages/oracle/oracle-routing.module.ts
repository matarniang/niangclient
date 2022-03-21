import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OraclePage } from './oracle.page';

const routes: Routes = [
  {
    path: '',
    component: OraclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OraclePageRoutingModule {}
