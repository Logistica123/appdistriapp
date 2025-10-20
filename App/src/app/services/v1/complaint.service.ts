import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private readonly API_URL = environment.API_URL;
  private readonly V1 = 'v1/app/';

  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(`${this.API_URL}${this.V1}complaints`);
  }

  create(body: { type: string; subject?: string; message: string }): Observable<any> {
    return this.http.post(`${this.API_URL}${this.V1}complaints`, body);
  }
}
