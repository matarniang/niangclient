import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutresPage } from './autres.page';

const routes: Routes = [
  {
    path: '',
    component: AutresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutresPageRoutingModule {}
