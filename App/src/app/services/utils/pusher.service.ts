import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  channel;
  pusher;

  constructor(public http: HttpClient) {
    //
  }

  public init(authToken) {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      forceTLS: false,
      authEndpoint: environment.pusher.authEndpoint,
      auth: {
        params: {},
        headers: {
          Authorization: 'Bearer ' + authToken,
          Accept: 'application/json'
        }
      }
    });

    return this.pusher;
  }
}
