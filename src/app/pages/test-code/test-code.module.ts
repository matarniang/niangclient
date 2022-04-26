import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestCodePageRoutingModule } from './test-code-routing.module';
import { TestCodePage } from './test-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCodePageRoutingModule,
  ],
  declarations: [TestCodePage],
  //entryComponents: [],
})
export class TestCodePageModule {}
