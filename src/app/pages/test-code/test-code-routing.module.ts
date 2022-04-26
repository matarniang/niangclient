import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCodePage } from './test-code.page';

const routes: Routes = [
  {
    path: '',
    component: TestCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCodePageRoutingModule {}
