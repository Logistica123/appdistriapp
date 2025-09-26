import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router,
              private navController: NavController) {
  }

  ngOnInit() {
  }

  navigateToMaintenancePage() {
    this.navController.navigateForward('document-list');
  }

  navigateToUrbanDistributionPage() {
    this.navController.navigateForward('urban-distribution-list');
  }

  navigateToJourneyListPage() {
    this.navController.navigateForward('journey-list');
  }

  navigateToOperationControlPage() {
    this.navController.navigateForward('operation-control-list');
  }

  navigateToFuelControlPage() {
    this.navController.navigateForward('fuel-control-list');
  }

  navigateToHelpPage() {
    this.navController.navigateForward('help');
  }

  navigateToNotificationListPage() {
    this.navController.navigateForward('notification-list');
  }

  navigateToSuggestFormPage() {
    this.navController.navigateForward('suggestion-form');
  }

}
