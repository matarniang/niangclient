import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimplissimoPage } from './simplissimo.page';

const routes: Routes = [
  {
    path: '',
    component: SimplissimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimplissimoPageRoutingModule {}
