import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {
  }

  getToday() {
    return new Date(new Date().getTime() -
      new Date().getTimezoneOffset() * 60000).toISOString();
  }
}
