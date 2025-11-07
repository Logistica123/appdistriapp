import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

export interface RouteClosurePayload {
  date: string;
  deliveries: number;
  notes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RouteClosureService {
  private readonly API_URL = environment.API_URL;
  private readonly V1 = 'v1/app/';

  constructor(private http: HttpClient) {
  }

  submitRouteClosure(payload: RouteClosurePayload, evidence: File): Observable<any> {
    const formData = new FormData();
    formData.append('date', payload.date);
    formData.append('deliveries', payload.deliveries.toString());
    if (payload.notes) {
      formData.append('notes', payload.notes);
    }
    if (evidence) {
      const filename = evidence.name || `hoja-de-ruta-${Date.now()}`;
      formData.append('evidence', evidence, filename);
    }
    return this.http.post(`${this.API_URL}${this.V1}route-closures`, formData);
  }
}
