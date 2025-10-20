import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Benefit, BenefitResponse } from '../../interfaces/Benefit';
import { BenefitService } from '../../services/v1/benefit.service';

interface CategorizedBenefits {
  hero: Benefit[];
  highlight: Benefit[];
  feature: Benefit[];
  card: Benefit[];
}

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.page.html',
  styleUrls: ['./benefits.page.scss']
})
export class BenefitsPage implements OnInit, OnDestroy {
  loading = true;
  heroBenefits: Benefit[] = [];
  highlightBenefits: Benefit[] = [];
  featureBenefits: Benefit[] = [];
  cardBenefits: Benefit[] = [];
  subscription: Subscription;

  readonly heroSlideOptions = {
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    },
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 16
  };

  private readonly fallbackBenefits: Benefit[] = [
    {
      id: -1,
      title: 'Póliza integral de seguros',
      short_description: 'Protegé tu flota con cobertura a medida y asistencia 24/7 pensada para choferes urbanos.',
      description: 'Gestión express desde la app, seguimiento en tiempo real y asesoramiento personalizado para cada unidad.',
      type: 'hero',
      cta_label: 'Cotizar ahora',
      cta_url: 'https://logistica.argentina/seguros',
      meta: {
        backgroundColor: 'linear-gradient(135deg, #051937 0%, #0a3a62 48%, #1280b0 100%)',
        badge: 'Cobertura total',
        animation: 'slide-in'
      }
    },
    {
      id: -2,
      title: 'Descuentos en combustible',
      short_description: 'Ahorrá hasta un 18% cargando en estaciones aliadas y acumulá litros para tu ranking.',
      type: 'highlight',
      cta_label: 'Ver estaciones adheridas',
      cta_url: 'https://logistica.argentina/combustible',
      meta: {
        backgroundColor: 'linear-gradient(135deg, #102a43 0%, #1a3d5c 100%)',
        accentColor: '#38f08e',
        badge: 'Gasificá tu ruta',
        icon: 'flame-outline'
      }
    },
    {
      id: -3,
      title: 'Programa de compras al por mayor',
      short_description: 'Accedé a descuentos exclusivos en lubricantes, cubiertas y accesorios homologados.',
      type: 'feature',
      cta_label: 'Explorar catálogo',
      cta_url: 'https://logistica.argentina/compras',
      meta: {
        backgroundColor: 'linear-gradient(135deg, #1f365c 0%, #274a78 100%)',
        accentColor: '#ffb703',
        icon: 'cart-outline'
      }
    },
    {
      id: -4,
      title: 'Club de beneficios Logística',
      short_description: 'Inscribite gratis y sumá experiencias, capacitaciones y sorpresas para todo tu equipo.',
      type: 'card',
      cta_label: 'Sumarme al club',
      cta_url: 'https://logistica.argentina/club',
      meta: {
        backgroundColor: 'linear-gradient(160deg, #211e4f 0%, #2f3275 100%)',
        accentColor: '#ff6f61',
        badge: 'Exclusivo drivers'
      }
    },
  ];

  constructor(private benefitService: BenefitService) {}

  ngOnInit() {
    this.loadBenefits();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  doRefresh(event) {
    this.loadBenefits(() => event.target.complete());
  }

  loadBenefits(onComplete?: () => void) {
    this.loading = true;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.benefitService.list().subscribe({
      next: (response: BenefitResponse) => {
        this.assignBenefits(response);
        this.loading = false;
        if (onComplete) { onComplete(); }
      },
      error: () => {
        this.useFallback();
        this.loading = false;
        if (onComplete) { onComplete(); }
      }
    });
  }

  assignBenefits(response: BenefitResponse) {
    const benefits = response.benefits || [];
    if (!benefits.length) {
      this.useFallback();
      return;
    }

    const categorized = this.categorizeBenefits(benefits);
    this.heroBenefits = categorized.hero.length ? categorized.hero : this.fallbackOfType('hero');
    this.highlightBenefits = categorized.highlight.length ? categorized.highlight : this.fallbackOfType('highlight');
    this.featureBenefits = categorized.feature.length ? categorized.feature : this.fallbackOfType('feature');
    this.cardBenefits = categorized.card.length ? categorized.card : this.fallbackOfType('card');
  }

  useFallback() {
    const categorized = this.categorizeBenefits(this.fallbackBenefits);
    this.heroBenefits = categorized.hero;
    this.highlightBenefits = categorized.highlight;
    this.featureBenefits = categorized.feature;
    this.cardBenefits = categorized.card;
  }

  categorizeBenefits(list: Benefit[]): CategorizedBenefits {
    const hero: Benefit[] = [];
    const highlight: Benefit[] = [];
    const feature: Benefit[] = [];
    const card: Benefit[] = [];

    list.forEach(item => {
      switch (item.type) {
        case 'hero':
          hero.push(item);
          break;
        case 'highlight':
          highlight.push(item);
          break;
        case 'feature':
          feature.push(item);
          break;
        case 'card':
        default:
          card.push(item);
          break;
      }
    });

    hero.sort(this.sortByPosition);
    highlight.sort(this.sortByPosition);
    feature.sort(this.sortByPosition);
    card.sort(this.sortByPosition);

    return { hero, highlight, feature, card };
  }

  fallbackOfType(type: Benefit['type']): Benefit[] {
    return this.fallbackBenefits.filter(item => item.type === type);
  }

  sortByPosition(a: Benefit, b: Benefit) {
    const positionA = a.position ?? 0;
    const positionB = b.position ?? 0;
    if (positionA === positionB) {
      return (a.id ?? 0) - (b.id ?? 0);
    }
    return positionA - positionB;
  }

  getBackgroundStyle(benefit: Benefit): Record<string, string> {
    const style: Record<string, string> = {};
    if (benefit.image_url) {
      style['backgroundImage'] = `url(${benefit.image_url})`;
    } else if (benefit.meta?.backgroundColor) {
      if (benefit.meta.backgroundColor.includes('gradient')) {
        style['background'] = benefit.meta.backgroundColor;
      } else {
        style['background'] = benefit.meta.backgroundColor;
      }
    }
    return style;
  }

  getAccentStyle(benefit: Benefit): Record<string, string> {
    const style: Record<string, string> = {};
    if (benefit.meta?.accentColor) {
      style['background'] = benefit.meta.accentColor;
      style['color'] = this.useLightText(benefit.meta.accentColor) ? '#0b1727' : '#ffffff';
    }
    return style;
  }

  useLightText(color: string): boolean {
    const hex = color?.replace('#', '');
    if (!hex || hex.length < 6) {
      return false;
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.7;
  }

  getAnimationClass(benefit: Benefit): string {
    const animation = benefit.meta?.animation;
    switch (animation) {
      case 'fade':
        return 'animate__animated animate__fadeInUp';
      case 'pulse':
        return 'animate__animated animate__pulse';
      case 'float':
        return 'animate__animated animate__fadeIn';
      case 'slide-in':
      default:
        return 'animate__animated animate__slideInUp';
    }
  }

  openBenefitLink(benefit: Benefit) {
    if (benefit.cta_url) {
      const isCordova = !!window['cordova'];
      const target = isCordova ? '_system' : '_blank';
      window.open(benefit.cta_url, target);
    }
  }
}
