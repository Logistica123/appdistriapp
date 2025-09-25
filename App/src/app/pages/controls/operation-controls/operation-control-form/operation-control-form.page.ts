import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {OperationControl} from '../../../../interfaces/OperationControl';
import {OperationControlService} from '../../../../services/v2/operation-control.service';
import {DriverService} from '../../../../services/v1/driver.service';
import {Driver} from '../../../../interfaces/Driver';
import {ImageDetailComponent} from '../../../../components/modals/image-detail/image-detail.component';
import {CameraService} from '../../../../services/utils/camera.service';
import {CameraPhotoFile} from '../../../../interfaces/CameraPhotoFile';
import {AuthService} from '../../../../services/v1/auth.service';
import {ToastComponent} from '../../../../components/toast/toast.component';
import {HttpUploadFileService} from '../../../../services/utils/http-upload-file.service';
import {DomSanitizer} from '@angular/platform-browser';
import {DateService} from '../../../../services/utils/date.service';
import {Branch} from '../../../../interfaces/Branch';
import {BranchService} from '../../../../services/v2/branch.service';
import {MaterialService} from '../../../../services/v2/material.service';
import {UbiService} from '../../../../services/v2/ubi.service';
import {Material} from '../../../../interfaces/Material';
import {Ubi} from '../../../../interfaces/Ubi';

@Component({
  selector: 'app-operation-control-form',
  templateUrl: './operation-control-form.page.html',
  styleUrls: ['./operation-control-form.page.scss'],
})
export class OperationControlFormPage implements OnInit {
  @Input() operationControl: OperationControl;
  driver: Driver;
  form: FormGroup;
  dateFC = new FormControl();
  maxYear: number;
  minYear: number;

  loading = false;
  submitting = false;
  showInputErrorMessage = false;
  showCustomMessage = false;

  files: CameraPhotoFile[] = [];
  operationControlId: string;
  uploadedFilesIndexes: number[] = [];
  uploadingErrorFilesIndexes: number[] = [];
  uploadingFileIndex: number;
  authToken: string;

  branches: Branch[] = [];
  filteredBranches: Branch[] = [];

  zoneFC = new FormControl();

  materials: Material[] = [];
  ubis: Ubi[] = [];

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              public sanitizer: DomSanitizer,
              private branchService: BranchService,
              private httpUploadFileService: HttpUploadFileService,
              private modalController: ModalController,
              private toastComponent: ToastComponent,
              private materialService: MaterialService,
              private ubiService: UbiService,
              private dateService: DateService,
              private cameraService: CameraService,
              private driverService: DriverService,
              private operationControlService: OperationControlService) {
    this.maxYear = new Date().getFullYear() + 2;
    this.minYear = new Date().getFullYear() - 1;

    this.form = this.formBuilder.group({
      city: [''],
      service: [''],
      branch_id: [''],
      material_id: [''],
      ubi_id: [''],
      transport_model: [''],
      transport_make: [''],
      tonnage: [''],
      company: [''],
      hours: [''],
      km: [''],
      assigned: [''],
      delivered: [''],
      description: [''],
    });
  }

  ngOnInit() {
    if (this.operationControl) {
      this.setOperationControl();
    } else {
      this.getDriverProfile();
    }

    this.authService.getAuthToken().then(authToken => {
      this.authToken = authToken;
    });

    this.dateFC.setValue(this.dateService.getToday());

    this.getActiveBranches();
    this.getMaterials();
    this.getUbis();

    this.zoneFC.valueChanges.subscribe(val => {
      if (val === 'interior') {
        this.filteredBranches = this.branches.filter(branch => branch.type === 2);
      } else if (val === 'cabecera') {
        this.filteredBranches = this.branches.filter(branch => branch.type === 1);
      }
    });
  }

  getDriverProfile() {
    this.driverService.getProfile()
      .subscribe((response: any) => {
        this.driver = response.driver;
        this.autofillDriverData();
      });
  }

  getActiveBranches() {
    this.branchService.getActiveBranches()
      .subscribe((response: any) => {
        this.branches = response.branches;
        this.filteredBranches = this.branches;
        if (this.operationControl && this.operationControl.branch) {
          this.zoneFC.setValue(this.operationControl.zone);
          this.form.controls.branch_id.setValue(this.operationControl.branch.id);
        } else {
          this.zoneFC.setValue('cabecera');
        }
      });
  }

  getMaterials() {
    return this.materialService.getMaterials()
      .subscribe((response: any) => {
        this.materials = response.materials;
        if (this.operationControl && this.operationControl.material_ubi) {
          this.form.controls.material_id.setValue(this.operationControl.material_ubi.material.id);
        }
      });
  }

  getUbis() {
    return this.ubiService.getUbis()
      .subscribe((response: any) => {
        this.ubis = response.ubis;
        if (this.operationControl && this.operationControl.material_ubi) {
          this.form.controls.ubi_id.setValue(this.operationControl.material_ubi.ubi.id);
        }
      });
  }

  autofillDriverData() {
    this.form.controls.city.setValue(this.driver.city);
    this.form.controls.transport_model.setValue(this.driver.car_model);
    this.form.controls.transport_make.setValue(this.driver.car_make);
    this.form.controls.tonnage.setValue(this.driver.tonnage);
    this.form.controls.company.setValue(this.driver.driver_company.name);
  }

  takePicture() {
    this.cameraService.takePicture().then((cameraPhotoFile: CameraPhotoFile) => {
      this.files.push(cameraPhotoFile);
    }).catch(err => {
      this.toastComponent.presentToast(
        `No se pudo acceder a la cámara (error: ${err})`,
        'middle',
        3000,
      );
    });
  }

  submit() {
    // if (!this.form.value.hours && !this.form.value.km) {
    //   this.form.setErrors({invalid: true});
    //   this.showCustomMessage = true;
    // } else {
    //   this.showCustomMessage = false;
    // }
    if (!this.form.valid || !this.dateFC.value) {
      this.showInputErrorMessage = true;
    } else {
      this.showCustomMessage = false;
      this.showInputErrorMessage = false;
      this.operationControl ? this.updateOperationControl() : this.storeOperationControl();
    }
  }

  storeOperationControl() {
    this.submitting = true;
    const body = this.setBody();
    this.operationControlService.storeOperationControl(body)
      .subscribe((response: any) => {
        this.operationControlId = response.operation_control_id;
        if (this.files.length > 0) {
          this.checkFiles();
        } else {
          this.closeModal();
        }
      }, error => {
        this.submitting = false;
      });
  }

  updateOperationControl() {
    this.submitting = true;
    const body = this.setBody();
    this.operationControlService.updateOperationControl(this.operationControl, body)
      .subscribe((response: any) => {
        this.operationControlId = response.operation_control_id;
        if (this.files.length > 0) {
          this.checkFiles();
        } else {
          this.closeModal();
        }
      }, error => {
        this.submitting = false;
      });
  }

  async uploadFiles() {
    let i = 0;
    this.uploadingFileIndex = i;
    for (const file of this.files) {
      await this.uploadFile(file.file)
        .then(() => {
          this.uploadedFilesIndexes.push(i);
        })
        .catch(err => {
          this.uploadingErrorFilesIndexes.push(i);
        }).finally(() => {
          i++;
          this.uploadingFileIndex = i;
        });
    }
  }

  uploadFile(file): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        operation_control_id: this.operationControlId.toString()
      };
      this.httpUploadFileService.uploadFile('operation-control-images', file, this.authToken, body)
        .then(() => {
          resolve(true);
        })
        .catch(err => {
          reject(err);
          this.toastComponent.presentToast('No se pudo carga la imagen del control de operaciones. Intente nuevamente', 'medium', 2500);
        });
    });
  }

  setBody() {
    return {
      date: this.dateFC.value,
      city: this.form.value.city,
      zone: this.zoneFC.value,
      branch_id: this.form.value.branch_id,
      material_id: this.form.value.material_id,
      ubi_id: this.form.value.ubi_id,
      service: this.form.value.service,
      transport_model: this.form.value.transport_model,
      transport_make: this.form.value.transport_make,
      tonnage: this.form.value.tonnage,
      company: this.form.value.company,
      hours: this.form.value.hours,
      km: this.form.value.km,
      assigned: this.form.value.assigned,
      delivered: this.form.value.delivered,
      returned: this.form.value.assigned - this.form.value.delivered,
      description: this.form.value.description,
    };
  }

  setOperationControl() {
    this.dateFC.setValue(this.operationControl.date);
    this.form.controls.city.setValue(this.operationControl.city);
    this.form.controls.service.setValue(this.operationControl.service);
    this.form.controls.transport_model.setValue(this.operationControl.transport_model);
    this.form.controls.transport_make.setValue(this.operationControl.transport_make);
    this.form.controls.tonnage.setValue(this.operationControl.tonnage);
    this.form.controls.company.setValue(this.operationControl.company);
    this.form.controls.hours.setValue(this.operationControl.hours);
    this.form.controls.km.setValue(this.operationControl.km);
    this.form.controls.assigned.setValue(this.operationControl.assigned);
    this.form.controls.delivered.setValue(this.operationControl.delivered);
    this.form.controls.description.setValue(this.operationControl.description);
  }

  async viewControlImageDetail(file: CameraPhotoFile) {
    const modal = await this.modalController.create({
      component: ImageDetailComponent,
      componentProps: {file}
    });
    await modal.present();
  }

  checkFiles() {
    this.uploadedFilesIndexes = [];
    this.uploadingErrorFilesIndexes = [];

    this.uploadFiles().then(() => {
      this.closeModal();
    });
  }

  closeModal() {
    this.form.reset();
    this.submitting = false;
    this.dismiss(true);
  }

  dismiss(success) {
    this.modalController.dismiss({success});
  }

  deleteImage(i) {
    this.files.splice(i, 1);
  }

}
