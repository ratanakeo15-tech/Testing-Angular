import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'reverse',
})
export class StarPipe implements PipeTransform {
  transform(value: string): string {
    // return `⭐️ ${value} ⭐️`;
     let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }
    return reverse;
  }
}