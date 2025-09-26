import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OperationControl} from '../../interfaces/OperationControl';

@Injectable({
  providedIn: 'root'
})
export class OperationControlService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';
  updatedOperationControl = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  getOperationControls(month, year) {
    return this.http.get(`${this.API_URL}${this.V1}operation-controls/month/${month}/year/${year}`);
  }

  storeOperationControl(body) {
    return this.http.post(`${this.API_URL}${this.V1}operation-controls`, body);
  }

  updateOperationControl(operationControl: OperationControl, body) {
    return this.http.put(`${this.API_URL}${this.V1}operation-controls/${operationControl.id}`, body);
  }

  deleteOperationControl(operationControl: OperationControl) {
    return this.http.delete(`${this.API_URL}${this.V1}operation-controls/${operationControl.id}`);
  }
}
