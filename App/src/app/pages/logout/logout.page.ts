import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {LoadingSpinnerComponent} from '../../components/loading-spinner/loading-spinner.component';
import {Router} from '@angular/router';
import {DriverService} from '../../services/v1/driver.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private storage: Storage,
              private router: Router,
              private driverService: DriverService,
              private loadingSpinnerComponent: LoadingSpinnerComponent) {
  }

  ngOnInit() {
    //
  }

  ionViewDidEnter() {
    this.loadingSpinnerComponent.presentLoadingSpinner().then(() => {
      this.storage.clear().then(() => {
        this.loadingSpinnerComponent.dismissLoadingSpinner().then(() => {
          this.driverService.setDriver$(null);
          this.router.navigateByUrl('login');
        });
      });
    });
  }

}
