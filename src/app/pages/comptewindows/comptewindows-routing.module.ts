import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptewindowsPage } from './comptewindows.page';

const routes: Routes = [
  {
    path: '',
    component: ComptewindowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptewindowsPageRoutingModule {}
