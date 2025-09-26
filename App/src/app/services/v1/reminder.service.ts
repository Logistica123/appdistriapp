import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Reminder} from '../../interfaces/Reminder';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(private http: HttpClient) {
  }

  getReminders() {
    return this.http.get(`${this.API_URL}${this.V1}reminders`);
  }

  storeReminder(body) {
    return this.http.post(`${this.API_URL}${this.V1}reminders`, body);
  }

  updateReminder(reminder: Reminder, body) {
    return this.http.post(`${this.API_URL}${this.V1}reminders/${reminder.id}`, body);
  }

  deleteReminder(reminder: Reminder) {
    return this.http.delete(`${this.API_URL}${this.V1}reminders/${reminder.id}`);
  }
}
