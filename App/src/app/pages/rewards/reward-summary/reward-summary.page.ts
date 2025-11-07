import {Component, OnDestroy, OnInit} from '@angular/core';
import {RewardBalance, RewardService} from '../../../services/v1/reward.service';
import {Subscription} from 'rxjs';

interface RewardProduct {
  id: number;
  name: string;
  description: string;
  pointsRequired: number;
  icon: string;
}

@Component({
  selector: 'app-reward-summary',
  templateUrl: './reward-summary.page.html',
  styleUrls: ['./reward-summary.page.scss']
})
export class RewardSummaryPage implements OnInit, OnDestroy {
  balance: RewardBalance | null = null;
  loading = true;
  private subscription: Subscription;

  readonly products: RewardProduct[] = [
    {id: 1, name: 'Card de combustible $20.000', description: 'Ahorrá en tu próxima carga en estaciones asociadas.', pointsRequired: 1000, icon: 'flame-outline'},
    {id: 2, name: 'Servicio de mantenimiento', description: 'Chequeo completo en talleres aliados.', pointsRequired: 3500, icon: 'construct-outline'},
    {id: 3, name: 'Seguro premium 1 mes', description: 'Amplía tu cobertura para toda la flota.', pointsRequired: 7500, icon: 'shield-checkmark-outline'}
  ];

  constructor(private rewardService: RewardService) {}

  ngOnInit() {
    this.loadBalance();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  loadBalance(event?: any) {
    this.loading = true;
    this.subscription = this.rewardService.getBalance().subscribe({
      next: balance => {
        this.balance = balance;
        this.loading = false;
        event?.target?.complete();
      },
      error: () => {
        this.loading = false;
        event?.target?.complete();
      }
    });
  }

  progressFor(product: RewardProduct): number {
    if (!this.balance) {
      return 0;
    }
    return Math.min(100, Math.floor((this.balance.total_points / product.pointsRequired) * 100));
  }

  pointsMissing(product: RewardProduct): number {
    if (!this.balance) {
      return product.pointsRequired;
    }
    return Math.max(0, product.pointsRequired - this.balance.total_points);
  }
}
