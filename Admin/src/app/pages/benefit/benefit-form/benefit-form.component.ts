import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Benefit } from '../../../models/Benefit';
import { BenefitService } from '../../../services/benefit.service';

interface BenefitFormData {
  benefit?: Benefit;
  mode: 'create' | 'edit';
}

@Component({
  selector: 'app-benefit-form',
  templateUrl: './benefit-form.component.html',
  styleUrls: ['./benefit-form.component.css']
})
export class BenefitFormComponent implements OnDestroy {
  form: FormGroup;
  loading = false;
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  removeImage = false;
  externalImageSubscription: Subscription;

  readonly typeOptions = [
    { value: 'hero', label: 'Banner hero (slider animado)' },
    { value: 'highlight', label: 'Destacado lateral' },
    { value: 'feature', label: 'Beneficio principal' },
    { value: 'card', label: 'Tarjeta/Grilla' },
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BenefitFormComponent>,
    private benefitService: BenefitService,
    @Inject(MAT_DIALOG_DATA) public data: BenefitFormData
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: [''],
      short_description: [''],
      description: [''],
      type: ['feature', Validators.required],
      position: [0],
      is_active: [true],
      cta_label: [''],
      cta_url: [''],
      external_image_url: [''],
      meta_backgroundColor: [''],
      meta_accentColor: [''],
      meta_badge: [''],
      meta_animation: ['slide-in'],
      meta_icon: [''],
    });

    if (data.benefit) {
      this.populateForm(data.benefit);
    }

    this.externalImageSubscription = this.form.get('external_image_url').valueChanges
      .subscribe(value => {
        if (!this.selectedFile && !this.removeImage) {
          this.imagePreview = value || null;
        }
      });
  }

  get isEditMode(): boolean {
    return this.data.mode === 'edit';
  }

  populateForm(benefit: Benefit) {
    this.form.patchValue({
      title: benefit.title,
      subtitle: benefit.subtitle,
      short_description: benefit.short_description,
      description: benefit.description,
      type: benefit.type || 'feature',
      position: benefit.position ?? 0,
      is_active: benefit.is_active ?? true,
      cta_label: benefit.cta_label,
      cta_url: benefit.cta_url,
      external_image_url: benefit.external_image_url || '',
      meta_backgroundColor: benefit.meta?.backgroundColor || '',
      meta_accentColor: benefit.meta?.accentColor || '',
      meta_badge: benefit.meta?.badge || '',
      meta_animation: benefit.meta?.animation || 'slide-in',
      meta_icon: benefit.meta?.icon || '',
    });

    this.imagePreview = benefit.image_url || null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
      this.removeImage = false;

      const reader = new FileReader();
      reader.onload = e => {
        this.imagePreview = (e.target as FileReader).result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  clearSelectedImage() {
    this.selectedFile = null;
    this.removeImage = true;
    this.imagePreview = null;
    this.form.get('external_image_url').setValue('');
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const formData = this.buildFormData();

    const request$ = this.isEditMode && this.data.benefit?.id
      ? this.benefitService.update(this.data.benefit, formData)
      : this.benefitService.create(formData);

    request$.subscribe((response: any) => {
      this.loading = false;
      this.dialogRef.close({
        success: true,
        benefit: response?.benefit
      });
    }, () => {
      this.loading = false;
    });
  }

  buildFormData(): FormData {
    const raw = this.form.value;
    const meta: Record<string, string> = {};

    if (raw.meta_backgroundColor) {
      meta.backgroundColor = raw.meta_backgroundColor;
    }
    if (raw.meta_accentColor) {
      meta.accentColor = raw.meta_accentColor;
    }
    if (raw.meta_badge) {
      meta.badge = raw.meta_badge;
    }
    if (raw.meta_animation) {
      meta.animation = raw.meta_animation;
    }
    if (raw.meta_icon) {
      meta.icon = raw.meta_icon;
    }

    const formData = new FormData();
    formData.append('title', raw.title);
    formData.append('subtitle', raw.subtitle || '');
    formData.append('short_description', raw.short_description || '');
    formData.append('description', raw.description || '');
    formData.append('type', raw.type);
    formData.append('position', String(raw.position ?? 0));
    formData.append('is_active', raw.is_active ? '1' : '0');
    formData.append('cta_label', raw.cta_label || '');
    formData.append('cta_url', raw.cta_url || '');

    if (Object.keys(meta).length) {
      formData.append('meta', JSON.stringify(meta));
    }

    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    } else if (this.removeImage) {
      formData.append('external_image_url', '');
    } else if (raw.external_image_url) {
      formData.append('external_image_url', raw.external_image_url);
    }

    return formData;
  }

  close() {
    this.dialogRef.close({ success: false });
  }

  ngOnDestroy() {
    if (this.externalImageSubscription) {
      this.externalImageSubscription.unsubscribe();
    }
  }
}
