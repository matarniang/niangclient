 import { Component, OnInit } from '@angular/core';
 import { BehaviorSubject } from 'rxjs';

 const circleR = 80;
 const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: 'app-autres',
  templateUrl: './autres.page.html',
  styleUrls: ['./autres.page.scss'],
})
export class AutresPage implements OnInit {
  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);
  timer: number; // in seconds
  interval;
  startduration = 1;

  circleR = circleR ;
  circleDasharray = circleDasharray ;

  state: 'start' | 'stop' = 'stop';
  constructor() { }

  startTimer(duration: number){
    this.state = 'start'; 
    clearInterval(this.interval);
    this.timer = duration*60;
    this.updatetimeValue();
    this.interval=setInterval( () =>{
      this.updatetimeValue();
    },1000);
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
    if(this.timer<=0){
      this.startTimer(this.startduration);
    }

  }

  ngOnInit() {
  }

}
