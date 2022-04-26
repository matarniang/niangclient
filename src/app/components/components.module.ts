import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilePhotoOptionComponentComponent } from './profile-photo-option-component/profile-photo-option-component.component';
// import { ProfilePhotoOptionComponentComponent } from '../../components/profile-photo-option-component/profile-photo-option-component.component';
// ProfilePhotoOptionComponentComponent

@NgModule({
  declarations: [FooterComponent, SidebarComponent],
   exports: [ FooterComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  // entryComponents: [ProfilePhotoOptionComponentComponent],

})
export class ComponentsModule { }
