import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {FormControl} from '@angular/forms';
import {OrderDateService} from '../../../services/utils/order-date.service';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popover-select-date',
  templateUrl: './popover-select-date.component.html',
  styleUrls: ['./popover-select-date.component.scss'],
})
export class PopoverSelectDateComponent implements OnInit, AfterViewInit {
  date;
  todayDate = new Date();
  maxDate = new Date();
  max: string;
  min: string;
  today: string;
  radioFC = new FormControl();
  orderDateSubscription: any;

  constructor(private orderDateService: OrderDateService,
              private popoverController: PopoverController) {
    this.max = new Date(this.maxDate.setFullYear(this.todayDate.getFullYear() + 1)).toISOString();
    this.min = new Date(this.maxDate.setFullYear(this.todayDate.getFullYear() - 1)).toISOString();
    this.today = this.todayDate.toISOString();

    this.date = moment().format();
    this.date = moment(this.date).toISOString();
  }

  ngOnInit() {
    this.orderDateSubscription = this.orderDateService.getOrderDate$()
      .subscribe(orderDate => {
        (orderDate && orderDate !== 'today' && orderDate !== 'tomorrow')
          ? this.radioFC.setValue('another')
          : this.radioFC.setValue(orderDate);
      });
  }

  ngAfterViewInit(): void {
    //
    setTimeout(() => {

    });
  }

  selectDate() {
    this.radioFC.value.toString().toLowerCase() === 'another'
      ? this.orderDateService.setOrderDate$(this.date)
      : this.orderDateService.setOrderDate$(this.radioFC.value);

    this.popoverController.dismiss();
  }

}
