import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {CameraService} from '../../../services/utils/camera.service';
import {ImagePickerService} from '../../../services/utils/image-picker.service';
import {Document} from '../../../interfaces/Document';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss'],
})
export class DocumentFormComponent implements OnInit {
  @Input() documents: Document[] = [];
  documentFormControl = new FormControl();

  constructor(private modalController: ModalController,
              private imagePickerService: ImagePickerService,
              private navParams: NavParams,
              private cameraService: CameraService) {
    this.documents = navParams.get('documents');
  }

  ngOnInit() {

  }

  takePicture() {
    this.cameraService.takePicture();
  }

  pickImages() {
    // this.imagePickerService.pickImages();
  }

  submit() {
    this.modalController.dismiss({document: this.documentFormControl.value, success: true});
  }

}
