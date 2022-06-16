import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { getToken } from 'src/model/getToken.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';

import { ProfilePhotoOptionComponentComponent  } from 'src/app/components/profile-photo-option-component/profile-photo-option-component.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 image='https://www.kasterencultuur.nl/editor/placeholder.jpg';
  loginad= localStorage.getItem('loginad');
  token= localStorage.getItem('token');


  Userdata = {
    // nom: '',
    // prenom: '',
    // email: '',
    login:  ''
  };

  constructor(private modalController: ModalController,private router: Router,private http: HttpClient,private authservice:AuthService,private camera: Camera) { }
 
  ngOnInit() {
    // setInterval( () =>{
      this.getataUser();
    // },0);
  }

  dashboardPage()
  {
	   this.router.navigate(['dashboard2'])
  }
   notificationsPage()
  {
  this.router.navigate(['notifications'])
  }

  getataUser() {
    // this.authservice.userInfo(new getToken(this.token)).subscribe( 
      // (data)=>{
       //console.log(data)
      //  data = JSON.parse(data);
      //  console.log(data)
      //  this.Userdata.nom = data['firstName'];
      //  this.Userdata.prenom = data['lastName'];
      //  this.Userdata.email = data['email'];
       this.Userdata.login = localStorage.getItem('loginad');

      // }
    // )
  }

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
      this.image = 'data:image/jpg;base64,' + cameraPhoto;
    } else if (source === 'library') {
      console.log('library');
      const libraryImage = await this.openLibrary();
      this.image = 'data:image/jpg;base64,' + libraryImage;
    }
    // else{
    //   console.log('delete');
    //   this.photo = 'data:image/jpg;base64,' + this.default;
    // }
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
