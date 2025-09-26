import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TollControl} from '../../interfaces/TollControl';

@Injectable({
  providedIn: 'root'
})
export class TollControlService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(private http: HttpClient) {
  }

  getTollControls(month, year) {
    return this.http.get(`${this.API_URL}${this.V1}toll-controls/month/${month}/year/${year}`);
  }

  storeTollControl(body) {
    return this.http.post(`${this.API_URL}${this.V1}toll-controls`, body);
  }

  updateTollControl(tollControl: TollControl, body) {
    return this.http.put(`${this.API_URL}${this.V1}toll-controls/${tollControl.id}`, body);
  }

  deleteTollControl(tollControl: TollControl) {
    return this.http.delete(`${this.API_URL}${this.V1}toll-controls/${tollControl.id}`);
  }
}
