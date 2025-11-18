import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {RouteClosurePayload, RouteClosureService} from '../../../services/v1/route-closure.service';
import {ToastComponent} from '../../../components/toast/toast.component';

@Component({
  selector: 'app-route-closure-form',
  templateUrl: './route-closure-form.component.html',
  styleUrls: ['./route-closure-form.component.scss']
})
export class RouteClosureFormComponent {
  form: FormGroup;
  submitting = false;
  evidencePreview: string | null = null;
  private evidenceFile: File | null = null;

  constructor(private modalController: ModalController,
              private formBuilder: FormBuilder,
              private routeClosureService: RouteClosureService,
              private toastComponent: ToastComponent) {
    this.form = this.formBuilder.group({
      date: [new Date().toISOString(), Validators.required],
      deliveries: [null, [Validators.required, Validators.min(0)]],
      notes: ['']
    });
  }

  dismiss(success = false) {
    this.modalController.dismiss({success});
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.evidenceFile = null;
      this.evidencePreview = null;
      return;
    }

    const file = input.files[0];
    this.evidenceFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.evidencePreview = typeof reader.result === 'string' ? reader.result : null;
    };
    reader.readAsDataURL(file);
  }

  removeEvidence() {
    this.evidenceFile = null;
    this.evidencePreview = null;
  }

  submit() {
    if (this.form.invalid || !this.evidenceFile) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: RouteClosurePayload = {
      date: this.form.value.date,
      deliveries: Number(this.form.value.deliveries || 0),
      notes: this.form.value.notes?.trim() || undefined
    };

    this.submitting = true;
    this.routeClosureService.submitRouteClosure(payload, this.evidenceFile).subscribe({
      next: () => this.dismiss(true),
      error: (error) => {
        this.submitting = false;
        const message = error?.error?.message || 'No se pudo registrar la hoja de ruta.';
        this.toastComponent.presentToast(message, 'bottom', 3500);
      },
      complete: () => {
        this.submitting = false;
      }
    });
  }
}
