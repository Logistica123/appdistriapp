import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Order} from '../../../interfaces/Order';
import {OrderService} from '../../../services/v1/order.service';

@Component({
  selector: 'app-urban-distribution-indicators',
  templateUrl: './urban-distribution-indicators.component.html',
  styleUrls: ['./urban-distribution-indicators.component.scss'],
})
export class UrbanDistributionIndicatorsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() orders: Order[];
  pendingOrdersCount: number;
  estimatedTime: string;
  TIME_PER_ORDER = 8.5;
  ordersUpdatedSubscription: any;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.ordersUpdatedSubscription = this.orderService.getOrdersUpdated$()
      .subscribe(ordersUpdated => {
        console.log(ordersUpdated);
        this.calculatePending();
        this.calculateEstTime();
      });
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.calculatePending();
    this.calculateEstTime();
  }

  ngOnDestroy(): void {
    if (this.ordersUpdatedSubscription) {
      this.ordersUpdatedSubscription.unsubscribe();
    }
  }

  calculatePending() {
    this.pendingOrdersCount = this.orders.filter(order => order.status === 'pending').length;
  }

  calculateEstTime() {
    const estimated = this.pendingOrdersCount * this.TIME_PER_ORDER;

    if (estimated <= 60) {
      this.estimatedTime = estimated + 'min.';
    } else {
      const hours = Math.round(estimated / 60);
      const minutesH = (estimated / 60) - hours;
      const minutes = Math.ceil(minutesH * 60);
      this.estimatedTime = `${hours}h ${minutes}m`;
    }
  }

}
