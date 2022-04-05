import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { MaladoRequest } from 'src/app/models/maladoRequest.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  image :string;
  loginAd= localStorage.getItem('loginAd');

  Userdata = {
    nom: '',
    prenom: '',
    email: '',
    login: ''
  };

  constructor(private router: Router,private http: HttpClient,private authservice:AuthService,private camera: Camera) { }
 
  ngOnInit() {
    
    setInterval( () =>{
      this.getImage()
      this.getataUser()
    },0);
  }
 getImage(){
  if (this.image!="../../../assets/images/profil.png"){
    this.image = localStorage.getItem('image');
  }else{
    this.image="../../../assets/images/profil.png"
    localStorage.setItem('image',this.image);
  }
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
    this.authservice.dataUser(new MaladoRequest('', '', '', '', this.loginAd)).subscribe( 
      (data)=>{
       //console.log(data)
       data = JSON.parse(data);
       console.log(data)
       this.Userdata.nom = data['firstName'];
       this.Userdata.prenom = data['lastName'];
       this.Userdata.email = data['email'];
       this.Userdata.login = data['loginad'];

      }
    )
  }

  async addPhoto() {
    const libraryImage = await this.openLibrary();
    this.image = 'data:image/jpg;base64,' + libraryImage;
    localStorage.setItem('image',this.image);
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
