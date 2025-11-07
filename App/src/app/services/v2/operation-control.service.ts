import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {OperationControl} from '../../interfaces/OperationControl';

@Injectable({
  providedIn: 'root'
})
export class OperationControlService {
  API_URL = environment.API_URL;
  V2 = 'v2/app/';

  constructor(private http: HttpClient) {
  }

  getOperationControls(month, year) {
    return this.http.get(`${this.API_URL}${this.V2}operation-controls/month/${month}/year/${year}`);
  }

  storeOperationControl(body) {
    return this.http.post(`${this.API_URL}${this.V2}operation-controls`, body);
  }

  updateOperationControl(operationControl: OperationControl, body) {
    return this.http.put(`${this.API_URL}${this.V2}operation-controls/${operationControl.id}`, body);
  }

  deleteOperationControl(operationControl: OperationControl) {
    return this.http.delete(`${this.API_URL}${this.V2}operation-controls/${operationControl.id}`);
  }
}
