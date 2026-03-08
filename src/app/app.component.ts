import { Component } from '@angular/core';
import { Howl } from 'howler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'howlerPlayer';
  state={
    isplayed:false
  };
  sound = new Howl({
    src:'http://202.152.135.3:8000/;?type=http&nocache=196',
    html5: true,
    format: ['mp3', 'aac'],
    preload:false
  });
  
  constructor(){
    let playing = this.sound.playing();
    console.log('initiate:',playing);
    if (!playing){
      this.play();
    }else if(playing){
      this.stop();
      
    }
  }

  toogler():void{
    let playing = this.sound.playing();
    if (!playing){
      this.play();
      
    }else if(playing){
      this.stop();
      
    }
  }

  stateChecker():void{
    let playing = this.sound.playing();
    console.log("Playing: ",playing);
  }

  play(){
      this.sound.play();
      console.log("play!");
      this.state.isplayed = true;
  }

  stop(){
      this.sound.unload();
      console.log("pause!");
      this.state.isplayed = false;
  }
}
