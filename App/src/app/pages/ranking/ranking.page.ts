import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DriverService} from '../../services/v2/driver.service';
import {Driver} from '../../interfaces/Driver';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.page.html',
    styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit, AfterViewInit {
    drivers: Driver[] = [];
    podium: Driver[] = [];
    list: Driver[] = [];
    loading = true;
    podium0ProfileImage: any;
    podium1ProfileImage: any;
    podium2ProfileImage: any;

    constructor(private driverService: DriverService,
                private domSanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        //
    }

    ngAfterViewInit() {
        this.getRanking();
    }

    getRanking() {
        this.loading = true;
        this.driverService.getRanking()
            .subscribe((response: any) => {
                this.drivers = response.drivers;
                this.podium = response.podium;
                this.list = response.list;
                if (this.podium.length >= 1) {
                    this.getPodium0DriverProfileImage(this.podium[0]);
                }
                if (this.podium.length >= 2) {
                    this.getPodium1DriverProfileImage(this.podium[1]);
                }
                if (this.podium.length >= 3) {
                    this.getPodium2DriverProfileImage(this.podium[2]);
                }
                this.loading = false;
            }, error => {
                this.loading = false;
            });
    }

    getPodium0DriverProfileImage(driver: Driver) {
        this.driverService.getDriverProfileImage(driver)
            .subscribe((blob: any) => {
                const objectURL = URL.createObjectURL(blob);
                this.podium0ProfileImage = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
            });
    }

    getPodium1DriverProfileImage(driver: Driver) {
        this.driverService.getDriverProfileImage(driver)
            .subscribe((blob: any) => {
                const objectURL = URL.createObjectURL(blob);
                this.podium1ProfileImage = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
            });
    }

    getPodium2DriverProfileImage(driver: Driver) {
        this.driverService.getDriverProfileImage(driver)
            .subscribe((blob: any) => {
                const objectURL = URL.createObjectURL(blob);
                this.podium2ProfileImage = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
            });
    }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getRanking();
      event.target.complete();
    }, 2000);
  }
}
