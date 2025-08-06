import {ChangeDetectionStrategy, Component, signal,input ,Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UserProfile } from "./user-profile/user-profile";
interface Person {
  id: number; // ✅ Now id must be a number
  name: string;
  img:string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, MatCardModule, MatButtonModule, UserProfile], changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
   username=signal('Model');
  isLoggedIn=signal(true);
  names:Person[]=[{id:1,name:'Alice',img:'https://i.pinimg.com/736x/c9/6b/cd/c96bcd9d4e2e871deba0f76d47ca0ea8.jpg'},{id:2,name:'Charlie',img:'https://i.pinimg.com/736x/3c/1d/13/3c1d137144ed442ad8141c84692a524a.jpg'},{id:3,name:'Bob',img:'https://i.pinimg.com/736x/ca/29/cf/ca29cf13e6b58b7ca87750f39ac1fdbf.jpg'} ];
  //  occupation = input<string>('occupation');
  //  @Input() myname: string = '';
 title =signal('Welcom to Angular') ;
  operatingSystems = [{id: 'win', name: 'Windows',age:'34'}, {id: 'osx', name: 'MacOS',age:'23'}, {id: 'linux', name: 'Linux',age:'45'}];
  message = '';

  sayHello() {
    this.message = 'Hello from Angular!';
  }
  onMouseOver() {
  this.message = 'Way to go 🚀';
 
}
newmessage = '';
  receiveMessage(event: string) {
    this.newmessage = event;
  }
  showBtn=signal(false);
  // if you want to display array of card just change it to false
}

