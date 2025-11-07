import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ComplaintService } from '../../services/v1/complaint.service';
import { Complaint } from '../../interfaces/Complaint';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { COMPLAINT_TYPE_LABELS, ComplaintTypeValue } from '../../constants/complaint-types';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.page.html',
  styleUrls: ['./complaint-list.page.scss'],
})
export class ComplaintListPage implements OnInit {
  complaints: Complaint[] = [];
  loading = false;
  private readonly typeLabels = COMPLAINT_TYPE_LABELS;

  constructor(
    private complaintService: ComplaintService,
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadComplaints();
  }

  ionViewWillEnter() {
    this.loadComplaints();
  }

  loadComplaints(event?: any) {
    this.loading = true;
    this.complaintService.list().subscribe({
      next: (response: any) => {
        this.complaints = response.complaints || [];
      },
      error: async () => {
        await this.presentToast('No se pudieron cargar los reclamos', 'danger');
      },
      complete: () => {
        this.loading = false;
        event?.target?.complete?.();
      }
    });
  }

  async openCreateModal() {
    const modal = await this.modalController.create({
      component: ComplaintFormComponent
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data?.success) {
      this.loadComplaints();
    }
  }

  getStatusLabel(complaint: Complaint): string {
    if (complaint.status_label) {
      return complaint.status_label;
    }

    switch (complaint.status) {
      case 'resolved':
        return 'Resuelto';
      case 'in_progress':
        return 'En progreso';
      default:
        return 'Abierto';
    }
  }

  getTypeLabel(type?: ComplaintTypeValue | null): string {
    if (!type) {
      return 'Sin tipo';
    }
    return this.typeLabels[type] ?? 'Sin tipo';
  }

  async presentToast(message: string, color: 'success' | 'danger' | 'warning' = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2500,
      color,
      position: 'top'
    });
    await toast.present();
  }
}
