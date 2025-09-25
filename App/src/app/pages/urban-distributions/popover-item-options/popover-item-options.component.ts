import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../interfaces/Order';
import {PopoverController} from '@ionic/angular';
import {CallNumberService} from '../../../services/utils/call-number.service';

@Component({
  selector: 'app-popover-item-options',
  templateUrl: './popover-item-options.component.html',
  styleUrls: ['./popover-item-options.component.scss'],
})
export class PopoverItemOptionsComponent implements OnInit {
  @Input() order: Order;

  constructor(private popoverController: PopoverController,
              private callNumberService: CallNumberService) {
  }

  ngOnInit() {
  }

  callNumber(order: Order) {
    this.callNumberService.call(order.phone);
  }

}
