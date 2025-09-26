import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: '',
        redirectTo: 'admin/distribucion-urbana',
        pathMatch: 'full'
      },
      {
        path: 'admin/repartidores',
        loadChildren: () => import('./pages/driver/driver.module').then(m => m.DriverModule),
        data: {
          title: 'Repartidores'
        },
      },
      {
        path: 'admin/ranking',
        loadChildren: () => import('./pages/ranking/ranking.module').then(m => m.RankingModule),
        data: {
          title: 'Ranking'
        },
      },
      {
        path: 'admin/repartidores/ubicacion',
        loadChildren: () => import('./pages/driver-location/driver-location.module').then(m => m.DriverLocationModule),
        data: {
          title: 'Ubic. repartidores'
        },
      },
      {
        path: 'admin/direcciones-cargadas',
        loadChildren: () => import('./pages/location/location.module').then(m => m.LocationModule),
        data: {
          title: 'Direcciones cargadas'
        },
      },
      {
        path: 'admin/viajes',
        loadChildren: () => import('./pages/journey/journey.module').then(m => m.JourneyModule),
        data: {
          title: 'Viajes'
        },
      },
      {
        path: 'admin/distribucion-urbana',
        loadChildren: () => import('./pages/urban-distribution/urban-distribution.module').then(m => m.UrbanDistributionModule),
        data: {
          title: 'Distribución urbana'
        },
      },
      {
        path: 'admin/documentos-cargados',
        loadChildren: () => import('./pages/uploaded-document/uploaded-document.module').then(m => m.UploadedDocumentModule),
        data: {
          title: 'Documentos cargados'
        },
      },
      {
        path: 'admin/notificaciones-enviadas',
        loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule),
        data: {
          title: 'Notificaciones'
        },
      },
      {
        path: 'admin/sugerencias',
        loadChildren: () => import('./pages/suggestion/suggestion.module').then(m => m.SuggestionModule),
        data: {
          title: 'Sugerencias'
        },
      },
      {
        path: 'admin/ayuda',
        loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule),
        data: {
          title: 'Ayuda'
        },
      },
      {
        path: 'admin/empresas',
        loadChildren: () => import('./pages/company/company.module').then(m => m.CompanyModule),
        data: {
          title: 'Empresas'
        },
      },
      {
        path: 'admin/control-operaciones',
        loadChildren: () => import('./pages/operation-control/operation-control.module').then(m => m.OperationControlModule),
        data: {
          title: 'Control operaciones'
        },
      },
      {
        path: 'admin/control-combustible',
        loadChildren: () => import('./pages/fuel-control/fuel-control.module').then(m => m.FuelControlModule),
        data: {
          title: 'Control combustible'
        },
      },
      {
        path: 'admin/control-peaje',
        loadChildren: () => import('./pages/toll-control/toll-control.module').then(m => m.TollControlModule),
        data: {
          title: 'Control peaje'
        },
      },
      {
        path: 'admin/solicitudes-retiro',
        loadChildren: () => import('./pages/withdrawal-request/withdrawal-request.module').then(m => m.WithdrawalRequestModule),
        data: {
          title: 'Solicitudes retiro'
        },
      },
      {
        path: 'admin/transacciones',
        loadChildren: () => import('./pages/transaction/transaction.module').then(m => m.TransactionModule),
        data: {
          title: 'Transacciones'
        },
      },
      {
        path: 'admin/puntaje',
        loadChildren: () => import('./pages/action/action.module').then(m => m.ActionModule),
        data: {
          title: 'Configuración puntaje'
        },
      },
      {
        path: 'admin/sucursales',
        loadChildren: () => import('./pages/branch/branch.module').then(m => m.BranchModule),
        data: {
          title: 'Sucursales'
        },
      },
      {
        path: 'admin/material-ubicacion',
        loadChildren: () => import('./pages/material-ubi/material-ubi.module').then(m => m.MaterialUbiModule),
        data: {
          title: 'Material - Ubicación'
        },
      },
    ]
  }, {
    path: 'login',
    loadChildren: () => import('./+login/login.module').then(m => m.LoginModule),
    data: {
      customLayout: true
    }
  }, {
    path: 'politica-privacidad',
    component: PrivacyPolicyComponent,
    data: {
      customLayout: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
