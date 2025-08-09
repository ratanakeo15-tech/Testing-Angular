import { Component,Input,Output,EventEmitter, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
interface Person {
  id: number; // ✅ Now id must be a number
  name: string;
  img:string
}
@Component({
  selector: 'app-user-profile',
  imports: [NgOptimizedImage],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss'
})
export class UserProfile {
  // we use it as a props in react
  @Input() names: Person[]= [];

//   @Output() allows a child component to emit events or data to the parent component.
// It uses an EventEmitter to send data up.

  @Output() messageEvent = new EventEmitter<string>();
   sendMessage() {
    this.messageEvent.emit('Hello from User Profile!');
  }
  @Input() showBtn: boolean =false; 

  showStats = false;

  loadStats() {
    this.showStats = true;
  }
   private route = inject(ActivatedRoute);
  userId: string | null = this.route.snapshot.paramMap.get('id');
}
// Pass data from child to parent
//showBtn follow up showBtn in app.ts shpow if you want whatever it will deisplay specific component you want like if you wanna test @Input using falsw false and if you wanna test @Output using true 