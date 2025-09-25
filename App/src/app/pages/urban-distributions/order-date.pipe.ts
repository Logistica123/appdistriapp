import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderDate'
})
export class OrderDatePipe implements PipeTransform {

  transform(value: string): unknown {
    console.log(value);
    if (value.toLowerCase() === 'today') {
      return 'hoy';
    } else if (value.toLowerCase() === 'tomorrow') {
      return 'mañana';
    }
    return `${new Date(value).getDate()}/${new Date(value).getMonth() + 1}/${new Date(value).getFullYear()}`;
  }

}
