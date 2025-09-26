import {Component, Input, OnInit} from '@angular/core';
import {Service} from '../interfaces/Service';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popover-service-details',
  templateUrl: './popover-service-details.component.html',
  styleUrls: ['./popover-service-details.component.scss'],
})
export class PopoverServiceDetailsComponent implements OnInit {
  @Input() service: Service;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  dismiss(success) {
    this.popoverController.dismiss({success});
  }

}
