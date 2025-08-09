import { Component,Injectable,inject,signal } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormGroup,FormControl,Validators} from '@angular/forms';
import { LoggerService } from './logger.service';
import {CurrencyPipe, DatePipe, UpperCasePipe,AsyncPipe,NgStyle} from '@angular/common';
import { StarPipe } from './testPipe';
import { of, delay } from 'rxjs';
import { HighlightDirective } from '../highlight';
import { SelectDirective } from '../select';
// @Injectable() is a decorator that marks a class as available to be injected as a dependency into other classes (like components or services).
interface Hero {
  name: string;
  emotion: string;
}
@Injectable({
  providedIn: 'root'
})

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [FormsModule,ReactiveFormsModule,UpperCasePipe,CurrencyPipe,DatePipe,StarPipe,AsyncPipe,NgStyle,HighlightDirective,SelectDirective],
  // Think of a pipe like a function you use in the template to modify how data appears to the user — without changing the actual data.
  // Example:uppercasePipe...
  templateUrl: './about.html',
  styleUrl: './about.scss',
    hostDirectives: [],
})
export class About {
  color = '';
  private logger = inject(LoggerService);
    loggerMessage = signal('');
  favoriteFramework = '';
  showFramework() {
    alert(this.favoriteFramework);
  }
  profileForm = new FormGroup({
    name: new FormControl('Nomo',Validators.required),
    email: new FormControl('Kimi',[Validators.required, Validators.email]),
  });
  // One way to use a service is to act as a way to interact with data and APIs. 
  handleSubmit() {
  alert(
    this.profileForm.value.name + ' | ' + this.profileForm.value.email
  );
  
}
logMessage() {
    const message = this.logger.log('Hello from LoggerService');
    this.loggerMessage.set(message);
  }
  loudMessage = 'we think you are doing great!';
  //pipe example
  price = 1234.56;
  today=new Date();
  word=signal('Hello');
  user$ = of({ name: 'Alice', age: 25 }).pipe(delay(1000));
  //  Ngclass 
   canSave = true;
  isUnchanged = false;
  isSpecial = true;

   currentStyles: Record<string, string> = {};
   setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '98px' : '12px',
    };
  }
   showSad = false;
  hero: any;
  heroes = [
    { name: 'Superman', emotion: 'happy' },
    { name: 'Batman', emotion: 'sad' },
    { name: 'Wonder Woman', emotion: 'excited' },
  ];
   isVisible = true;
    heroe: Hero[] = [
    { name: 'Superman', emotion: 'happy' },
    { name: 'Batman', emotion: 'sad' },
    { name: 'Flash', emotion: 'happy' }
  ];

    onlyHappy = false;
  selectedHero?: Hero;

  filterHeroes = (hero: Hero) =>
    !this.onlyHappy || hero.emotion === 'happy';
  }

