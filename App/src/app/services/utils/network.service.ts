import {Injectable} from '@angular/core';
import {Network} from '@ionic-native/network/ngx';
import {BehaviorSubject, Observable} from 'rxjs';
import {ConnectionStatus} from '../../interfaces/ConnectionStatus';
import {OfflineOrderManagerService} from '../v1/offline-order-manager.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private networkStatus$: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);

  connectSubscription: any;
  disconnectSubscription: any;

  constructor(private network: Network,
              private offlineManagerService: OfflineOrderManagerService) {

  }

  initializeNetworkEvents() {
    console.log('initializing network events');
    console.log('current network status', this.network.type);
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      if (this.networkStatus$.getValue() === ConnectionStatus.Online) {
        console.log('WE ARE OFFLINE');
        this.updateNetworkStatus(ConnectionStatus.Offline);
      }
    });

    this.connectSubscription = this.network.onConnect().subscribe(() => {
      if (this.networkStatus$.getValue() === ConnectionStatus.Offline) {
        console.log('WE ARE ONLINE');
        this.updateNetworkStatus(ConnectionStatus.Online);
      }
    });
  }

  updateNetworkStatus(status: ConnectionStatus) {
    this.networkStatus$.next(status);
    if (status === ConnectionStatus.Online) {
      this.sendRequests();
    }
  }

  sendRequests() {
    console.log('trying to send all requests...');
    this.offlineManagerService.checkStoredRequests();
  }

  getNetworkStatus$(): Observable<ConnectionStatus> {
    return this.networkStatus$.asObservable();
  }

  getCurrentNetworkStatus(): ConnectionStatus {
    return this.networkStatus$.getValue();
  }

  stopNetworkEvents() {
    if (this.connectSubscription) {
      this.connectSubscription.unsubscribe();
    }

    if (this.disconnectSubscription) {
      this.disconnectSubscription.unsubscribe();
    }
  }
}
