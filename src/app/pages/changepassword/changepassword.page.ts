import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MaladoRequest } from 'src/app/models/maladoRequest.model';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject } from 'rxjs';
const circleR = 80;
 const circleDasharray = 2 * Math.PI * circleR;


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  confirmdField = ''
  passwordChamp = ''
  isActivated = false;
  isFirstConnection = true;
  loginAd= localStorage.getItem('loginAd');
  token= localStorage.getItem('token')
  loginField:string
  hasPassword = true;

  showPassword= false;
  passwordToggleIcon= 'eye'
  userIcon = 'person'

// timer variable
time: BehaviorSubject<string> = new BehaviorSubject('00:00');
percent: BehaviorSubject<number> = new BehaviorSubject(100);
timer: number; // in seconds
interval;
startduration = 5;
circleR = circleR ;
circleDasharray = circleDasharray ;
state: 'start' | 'stop' = 'stop';
// 
 
  constructor(private router: Router,
     private alerteCtrl: AlertController,
     private authservice: AuthService,
     public alertController : AlertController
      ) { }
  
      togglePassword():void {
        this.showPassword =! this.showPassword;
    
        if (this.passwordToggleIcon=='eye'){
          this.passwordToggleIcon ='eye-off';
        }else{
          this.passwordToggleIcon='eye';
        }
      }
     

  dashboardPage()
  {
   this.router.navigate(['dashboard'])
  }
   notificationsPage()
  {
  this.router.navigate(['notifications'])
  }
  loginPage()
  {
	   this.router.navigate(['login-ad'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }

  ngOnInit() {
    this.isEnabled(enabled => {
       if (this.isActivated){
         //le compte est activé
         //this.stopTimer();
        this.checkConnection(hasPassword => {
          if (hasPassword) {
            // il a déja un mot de passe
            this.router.navigate(['connexion'])

          } else {
            // il n'a pas encore de mot de passe.
            this.router.navigate(['changepassword'])
          }
        })
       } else {
         // il n'a pas encore validé son compte et/ou son lien a expiré
         // vérifier si le token is toujours actif.
          //this.tokenValidation()
          this.startTimer(1);
          setInterval(() => {
            this.isEnabled(enabled =>{
              if (this.isActivated){
                this.stopTimer();
                //le compte vient d'être activé
                this.hasPassword = false;
              }
            })
          },1000); 
       }
    })
      
  }


   checkConnection(cb) {
    this.authservice.passwordVerification(new MaladoRequest('', '', '', '', this.loginAd)).subscribe( 
      (data)=>{
        this.hasPassword = data === 'true' ? true : false;
        return cb(data === 'true' ? true : false)
      }
    )
  }

  isEnabled(cb) {
      this.authservice.isEnabled(new MaladoRequest('', '', '', '', this.loginAd)).subscribe( 
      (data) => {
        this.isActivated = data === 'true' ? true : false;
        cb(this.isActivated)
      })
   }

   confirmpassword(){
      this.authservice.confirmpassword(new MaladoRequest('', '','',this.passwordChamp,this.loginAd)).subscribe(
        (data) =>{
          console.log(data)
          localStorage.setItem('loginAd', this.loginAd)
          this.router.navigate(['dashboard2'])
          
        },
        (error) =>{
          console.log("erreur password")
          console.log(error.message)
        }
          
      )
   }


startTimer(duration: number){
  this.state = 'start'; 
  clearInterval(this.interval);
  this.timer = duration*300;
  this.updatetimeValue();
  this.interval=setInterval( () =>{
    this.updatetimeValue();
  },5000);
}

stopTimer(){
  clearInterval(this.interval);
  this.time.next('00:00');
  this.state = 'stop';
}

percentageOffset(percent){
  const percentFloat = percent / 100;
  return circleDasharray * (1-percentFloat);

}


updatetimeValue(){
  let minutes: any = this.timer / 60;
  let secondes:any = this.timer % 60;
  minutes=String('0'+ Math.floor(minutes)).slice(-2);
  secondes=String('0'+ Math.floor(secondes)).slice(-2);

  const text = minutes + ':' + secondes;
  this.time.next(text);

  const totalTime = this.startduration * 60;
  const percentage = ((totalTime-this.timer)/totalTime) * 100;
  this.percent.next(percentage)

  --this.timer;
  if(this.timer<0){
    if(!this.isActivated){
      this.stopTimer();
      this.router.navigate(['login-ad'])
    }
    //this.startTimer(this.startduration);
  }

}

}
