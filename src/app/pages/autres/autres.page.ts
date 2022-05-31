 import { Component,OnInit} from '@angular/core';
 import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
 import { LoadingController, AlertController } from '@ionic/angular';
 import { DemandeRequest } from 'src/model/demandeRequest.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-autres',
  templateUrl: './autres.page.html',
  styleUrls: ['./autres.page.scss'],
})
export class AutresPage implements OnInit {
  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
  todoList:JSON;
  today: number = Date.now();
  loginad= localStorage.getItem('loginAd');
  constructor(private camera: Camera,
    private authservice : AuthService,
    public loadingController: LoadingController,
    public alertController: AlertController,) { }

  ngOnInit() {
  }



  async addPhoto(source: string) {
    if (source === 'camera') {
      console.log('camera');
      //const loading = await this.loadingController.create();
	    // await loading.present();
      const cameraPhoto = await this.openCamera();
      this.image = 'data:image/jpg;base64,' + cameraPhoto;
    } else {
      console.log('library');
      const libraryImage = await this.openLibrary();
      this.image = 'data:image/jpg;base64,' + libraryImage;
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

}
