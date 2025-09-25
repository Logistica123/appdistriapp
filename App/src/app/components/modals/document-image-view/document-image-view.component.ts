import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-document-image-view',
  templateUrl: './document-image-view.component.html',
  styleUrls: ['./document-image-view.component.scss'],
})
export class DocumentImageViewComponent implements OnInit {
  @Input() image: string;

  constructor(private modalController: ModalController,
              private navParams: NavParams) {
    this.image = navParams.get('image');
  }

  ngOnInit() {
    //
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
