import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { BenefitResponse } from '../../interfaces/Benefit';

@Injectable({
  providedIn: 'root'
})
export class BenefitService {
  private readonly API_URL = environment.API_URL;
  private readonly V1 = 'v1/app/';

  constructor(private http: HttpClient) {}

  list(params: Record<string, any> = {}): Observable<BenefitResponse> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      const value = params[key];
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.append(key, value);
      }
    });

    return this.http.get(`${this.API_URL}${this.V1}benefits`, { params: httpParams })
      .pipe(map((response: any) => {
        return {
          benefits: response?.benefits || [],
          grouped: response?.grouped || {}
        } as BenefitResponse;
      }));
  }
}
