import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(public http: HttpClient) {

  }

  storeSuggestion(body) {
    return this.http.post(`${this.API_URL}${this.V1}suggestions`, body);
  }
}
