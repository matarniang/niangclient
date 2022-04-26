import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePhotoOptionComponentComponent  } from 'src/app/components/profile-photo-option-component/profile-photo-option-component.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-test-code',
  templateUrl: './test-code.page.html',
  styleUrls: ['./test-code.page.scss'],
})
export class TestCodePage implements OnInit {
  photo = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
  default="../../../assets/images/profil.png"
  constructor(private modalController: ModalController,private camera: Camera,) { }

  async openOptionSelection() {
    const modal = await this.modalController.create({
      component: ProfilePhotoOptionComponentComponent ,
      cssClass: "transparent-modal"
    });
    modal.onDidDismiss()
    .then(res => {
      console.log(res);
      if (res.role !== 'backdrop') {
        this.addPhoto(res.data);
      }
    });
    return await modal.present();
  }

  async addPhoto(source: string) {
    if (source === 'camera') {
      console.log('camera');
      const cameraPhoto = await this.openCamera();
      this.photo = 'data:image/jpg;base64,' + cameraPhoto;
    } else if (source === 'library') {
      console.log('library');
      const libraryImage = await this.openLibrary();
      this.photo = 'data:image/jpg;base64,' + libraryImage;
    }
    else{
      console.log('delete');
      this.photo = 'data:image/jpg;base64,' + this.default;
    }
  }

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }
async openLibrary() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 1000,
    targetHeight: 1000,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  };
  return await this.camera.getPicture(options);
}

  ngOnInit() {
  }

}
