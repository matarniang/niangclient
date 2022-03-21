import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaiaPage } from './gaia.page';

const routes: Routes = [
  {
    path: '',
    component: GaiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaiaPageRoutingModule {}
