import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-popover-alert',
  templateUrl: './popover-alert.component.html',
  styleUrls: ['./popover-alert.component.scss'],
})
export class PopoverAlertComponent implements OnInit {
  @Input() message: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

}
