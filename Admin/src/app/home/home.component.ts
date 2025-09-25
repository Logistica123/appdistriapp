import { Component, AfterViewInit, OnInit } from '@angular/core';

import * as Prism from 'prismjs';
import { DriverService } from '../services/driver.service';
import { UploadedDocumentService } from '../services/uploaded-document.service';
import { SuggestionService } from '../services/suggestion.service';
import { LocationService } from '../services/location.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  driversCount = 0;
  uploadedDocumentsCount = 0;
  suggestionsCount = 0;
  locationsCount = 0;
  notificationsCount = 0;

  constructor(private driverService: DriverService,
              private suggestionService: SuggestionService,
              private notificationService: NotificationService,
              private locationService: LocationService,
              private uploadedDocumentService: UploadedDocumentService) {

  }

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  ngOnInit(): void {
    this.getDriversCount();
    this.getUploadedDocumentsCount();
    this.getSuggestionsCount();
    this.getLocationsCount();
    this.getNotificationsCount();
  }

  getDriversCount() {
    this.driverService.getDriversCount()
      .subscribe((response: any) => {
        console.log(response);
        this.driversCount = response.drivers_count;
      }, error => {

      }, () => {

      });
  }

  getUploadedDocumentsCount() {
    this.uploadedDocumentService.getUploadedDocumentsCount()
      .subscribe((response: any) => {
        this.uploadedDocumentsCount = response.uploaded_documents_count;
      });
  }

  getSuggestionsCount() {
    this.suggestionService.getSuggestionsCount()
      .subscribe((response: any) => {
        this.suggestionsCount = response.suggestions_count;
      });
  }

  getLocationsCount() {
    this.locationService.getLocationsCount()
      .subscribe((response: any) => {
        this.locationsCount = response.locations_count;
      });
  }

  getNotificationsCount() {
    this.notificationService.getNotificationsCount()
      .subscribe((response: any) => {
        this.notificationsCount = response.notifications_count;
      });
  }
}
