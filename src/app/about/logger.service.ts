import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // This makes the service available globally
})
export class LoggerService {
  log(message: string) {
    // console.log('LoggerService:', message);
    return `Log message is :${message} `;
  }
}
