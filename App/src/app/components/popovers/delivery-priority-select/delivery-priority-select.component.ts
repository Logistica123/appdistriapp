import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-delivery-priority-select',
  templateUrl: './delivery-priority-select.component.html',
  styleUrls: ['./delivery-priority-select.component.scss'],
})
export class DeliveryPrioritySelectComponent implements OnInit {
  @Input() length: number;
  options: number[] = [];

  constructor() {
  }

  ngOnInit() {
    this.setOptions();
  }

  setOptions() {
    for (let i = 1; i < this.length; i++) {
      this.options.push(i);
    }
  }

  selectOption(option) {
    console.log(option.detail.value);
    console.log('selected option', option);
  }

}
