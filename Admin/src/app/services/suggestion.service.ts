import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  API_URL = environment.API_URL;
  V1 = 'v1/admin/';

  constructor(private http: HttpClient) {
  }

  getSuggestions() {
    return this.http.get(`${this.API_URL}${this.V1}suggestions`);
  }

  getSuggestionsCount() {
    return this.http.get(`${this.API_URL}${this.V1}suggestions/count`);
  }
}
