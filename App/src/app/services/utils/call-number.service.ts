import {Injectable} from '@angular/core';
import {CallNumber} from '@ionic-native/call-number/ngx';

@Injectable({
  providedIn: 'root'
})
export class CallNumberService {

  constructor(private callNumber: CallNumber) {
  }

  call(phoneNumber: string) {
    this.callNumber.callNumber(phoneNumber, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => {});
  }
}
