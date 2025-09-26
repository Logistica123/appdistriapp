import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ModeStatus} from '../../interfaces/ModeStatus';
import {SyncService} from './sync.service';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private modeStatus$: BehaviorSubject<ModeStatus> = new BehaviorSubject(ModeStatus.Online);

  constructor(private syncService: SyncService) {
  }

  updateModeStatus(status: ModeStatus) {
    this.modeStatus$.next(status);
    // if (status === ModeStatus.Online) {
    //   this.syncService.sync();
    // }
  }

  getModeStatus$(): Observable<ModeStatus> {
    return this.modeStatus$.asObservable();
  }

  getCurrentModeStatus(): ModeStatus {
    return this.modeStatus$.getValue();
  }
}
