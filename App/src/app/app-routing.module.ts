import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    // redirectTo: 'urban-distribution-list',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module')
      .then(m => m.LogoutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomePageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module')
      .then(m => m.HelpPageModule)
  },
  {
    path: 'complaint-list',
    loadChildren: () => import('./pages/complaints/complaint-list.module').then(m => m.ComplaintListPageModule)
  },
  {
    path: 'liquidation-list',
    loadChildren: () => import('./pages/liquidations/liquidation-list.module').then(m => m.LiquidationListPageModule)
  },
  {
    path: 'notification-list',
    loadChildren: () => import('./pages/notification-list/notification-list.module')
      .then(m => m.NotificationListPageModule)
  },
  {
    path: 'insurance',
    loadChildren: () => import('./pages/insurance/insurance.module')
      .then(m => m.InsurancePageModule)
  },
  {
    path: 'benefits',
    loadChildren: () => import('./pages/benefits/benefits.module')
      .then(m => m.BenefitsPageModule)
  },
  {
    path: 'reward-summary',
    loadChildren: () => import('./pages/rewards/reward-summary/reward-summary.module')
      .then(m => m.RewardSummaryPageModule)
  },
  {
    path: 'suggestion-form',
    loadChildren: () => import('./pages/suggestion-form/suggestion-form.module')
      .then(m => m.SuggestionFormPageModule)
  },
  {
    path: 'document-list',
    loadChildren: () => import('./pages/maintenance/document-list/document-list.module')
      .then(m => m.DocumentListPageModule)
  },
  {
    path: 'document-form',
    redirectTo: 'document-list'
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile-tabs/profile-tabs.module')
      .then(m => m.ProfileTabsPageModule)
  },
  {
    path: 'delivery-order-map',
    loadChildren: () => import('./pages/delivery-order-map/delivery-order-map.module')
      .then(m => m.DeliveryOrderMapPageModule)
  },
  {
    path: 'urban-distribution-detail',
    loadChildren: () =>
      import('./pages/urban-distributions/urban-distribution-detail/urban-distribution-detail.module')
        .then(m => m.UrbanDistributionDetailPageModule)
  },
  {
    path: 'urban-distribution-form',
    loadChildren: () =>
      import('./pages/urban-distributions/urban-distribution-form/urban-distribution-form.module')
        .then(m => m.UrbanDistributionFormPageModule)
  },
  {
    path: 'urban-distribution-list',
    loadChildren: () =>
      import('./pages/urban-distributions/urban-distribution-list/urban-distribution-list.module')
        .then(m => m.UrbanDistributionListPageModule)
  },
  {
    path: 'journey-list',
    loadChildren: () => import('./pages/journeys/journey-list/journey-list.module')
      .then(m => m.JourneyListPageModule)
  },
  {
    path: 'journey-form',
    loadChildren: () => import('./pages/journeys/journey-form/journey-form.module')
      .then(m => m.JourneyFormPageModule)
  },
  {
    path: 'journey-detail',
    loadChildren: () => import('./pages/journeys/journey-detail/journey-detail.module')
      .then(m => m.JourneyDetailPageModule)
  },
  // {
  //   path: 'operation-control-form',
  //   loadChildren: () => import('./pages/controls/operation-controls/operation-control-form/operation-control-form.module')
  //     .then(m => m.OperationControlFormPageModule)
  // },
  // {
  //   path: 'operation-control-list',
  //   loadChildren: () => import('./pages/controls/operation-controls/operation-control-list/operation-control-list.module')
  //     .then(m => m.OperationControlListPageModule)
  // },
  // {
  //   path: 'fuel-control-list',
  //   loadChildren: () => import('./pages/controls/fuel-controls/fuel-control-list/fuel-control-list.module')
  //     .then(m => m.FuelControlListPageModule)
  // },
  // {
  //   path: 'fuel-control-form',
  //   loadChildren: () => import('./pages/controls/fuel-controls/fuel-control-form/fuel-control-form.module')
  //     .then(m => m.FuelControlFormPageModule)
  // },
  {
    path: 'reminder-list',
    loadChildren: () => import('./pages/reminders/reminder-list/reminder-list.module')
      .then(m => m.ReminderListPageModule)
  },
  {
    path: 'reminder-form',
    loadChildren: () => import('./pages/reminders/reminder-form/reminder-form.module')
      .then(m => m.ReminderFormPageModule)
  },
  {
    path: 'toll-control-list',
    loadChildren: () => import('./pages/controls/toll-controls/toll-control-list/toll-control-list.module')
      .then(m => m.TollControlListPageModule)
  },
  {
    path: 'toll-control-form',
    loadChildren: () => import('./pages/controls/toll-controls/toll-control-form/toll-control-form.module')
      .then(m => m.TollControlFormPageModule)
  },
  {
    path: 'profile-transport',
    loadChildren: () => import('./pages/profile/profile-transport/profile-transport.module').then(m => m.ProfileTransportPageModule)
  },
  {
    path: 'profile-payment',
    loadChildren: () => import('./pages/profile/profile-payment/profile-payment.module').then(m => m.ProfilePaymentPageModule)
  },
  {
    path: 'wallet-tabs',
    loadChildren: () => import('./pages/wallet/wallet-tabs/wallet-tabs.module')
      .then(m => m.WalletTabsPageModule)
  },
  {
    path: 'control-tabs',
    loadChildren: () => import('./pages/controls/control-tabs/control-tabs.module')
      .then(m => m.ControlTabsPageModule)
  },
  {
    path: 'wallet-withdrawal-request-form',
    loadChildren: () => import('./pages/wallet/wallet-withdrawal-request-form/wallet-withdrawal-request-form.module')
      .then(m => m.WalletWithdrawalRequestFormPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./pages/ranking/ranking.module')
      .then(m => m.RankingPageModule)
  },
  {
    path: 'wallet-withdrawal-request-list',
    loadChildren: () => import('./pages/wallet/wallet-withdrawal-request-list/wallet-withdrawal-request-list.module')
      .then(m => m.WalletWithdrawalRequestListPageModule)
  },
  {
    path: 'wallet-transaction-list',
    loadChildren: () => import('./pages/wallet/wallet-transaction-list/wallet-transaction-list.module')
      .then(m => m.WalletTransactionListPageModule)
  },
  {
    path: 'profile-form',
    loadChildren: () => import('./pages/profile/profile-form/profile-form.module').then( m => m.ProfileFormPageModule)
  },
  {
    path: 'delivery-map/:type',
    loadChildren: () => import('./pages/delivery-map/delivery-map.module').then( m => m.DeliveryMapPageModule)
  },
  {
    path: 'all-orders-map',
    loadChildren: () => import('./pages/all-orders-map/all-orders-map.module').then( m => m.AllOrdersMapPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./pages/games/games.module').then(m => m.GamesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
