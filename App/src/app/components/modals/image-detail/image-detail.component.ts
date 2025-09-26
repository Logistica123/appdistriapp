import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CameraPhotoFile} from '../../../interfaces/CameraPhotoFile';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
})
export class ImageDetailComponent implements OnInit {
  @Input() file: CameraPhotoFile;

  constructor(private modalController: ModalController,
              public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }

}
