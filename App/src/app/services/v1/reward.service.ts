import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

export interface RewardBalance {
  total_points: number;
  total_closures: number;
  last_closure: {
    date: string;
    deliveries: number;
    points_awarded: number;
  } | null;
}

@Injectable({providedIn: 'root'})
export class RewardService {
  private readonly baseUrl = `${environment.API_URL}v1/app/rewards`;

  constructor(private http: HttpClient) {}

  getBalance(): Observable<RewardBalance> {
    return this.http.get<RewardBalance>(`${this.baseUrl}/balance`);
  }
}
