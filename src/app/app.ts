import {ChangeDetectionStrategy, Component, signal,input ,Input} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UserProfile } from "./user-profile/user-profile";
import {About} from './about/about';
import {Home} from './home/home';


interface Person {
  id: number; // ✅ Now id must be a number
  name: string;
  img:string
}

@Component({
  selector: 'app-root',
   standalone: true,
  //how to use route
  // imports: [RouterOutlet],
  //<!-- app.component.html -->
// <nav>
//   <a routerLink="/">Home</a>
//   <a routerLink="/about">About</a>
// </nav>

//  Routed components render here 
// <router-outlet></router-outlet>

//how to manage route
// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
// ];
//   Because Angular uses routing to load components based on the URL. The <router-outlet> tells Angular:

// "This is where you should render the component for the current route."
  // <router-outlet> is a directive that acts as a placeholder in your HTML where routed components will be displayed.
  imports: [
    RouterOutlet,
     MatSlideToggleModule, 
     MatCardModule, 
     MatButtonModule,
     RouterLink
     
    ], 
     changeDetection: ChangeDetectionStrategy.OnPush,
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
  // if you want to display button just change it to true
// how to create component by command
  // ng generate component nameOfComponent


}

