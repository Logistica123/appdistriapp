import {Component, Input, OnInit} from '@angular/core';
import {DocumentFile} from '../../../interfaces/DocumentFile';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-document-file-image-detail',
  templateUrl: './document-file-image-detail.component.html',
  styleUrls: ['./document-file-image-detail.component.scss'],
})
export class DocumentFileImageDetailComponent implements OnInit {
  @Input() documentFiles: DocumentFile[] = [];

  constructor(private navParams: NavParams,
              private modalController: ModalController) {
    this.documentFiles = this.navParams.get('documentFiles');
  }

  ngOnInit() {
  }

}
