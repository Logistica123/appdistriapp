import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FuelControl} from '../../interfaces/FuelControl';

@Injectable({
  providedIn: 'root'
})
export class FuelControlService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(private http: HttpClient) {
  }

  getFuelControls(month, year) {
    return this.http.get(`${this.API_URL}${this.V1}fuel-controls/month/${month}/year/${year}`);
  }

  storeFuelControl(body) {
    return this.http.post(`${this.API_URL}${this.V1}fuel-controls`, body);
  }

  updateFuelControl(fuelControl: FuelControl, body) {
    return this.http.put(`${this.API_URL}${this.V1}fuel-controls/${fuelControl.id}`, body);
  }

  deleteFuelControl(fuelControl: FuelControl) {
    return this.http.delete(`${this.API_URL}${this.V1}fuel-controls/${fuelControl.id}`);
  }
}
