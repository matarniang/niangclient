 import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./pages/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./pages/faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./pages/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'login-ad',
    loadChildren: () => import('./login-ad/login-ad.module').then( m => m.LoginAdPageModule)
  },
  {
    path: 'comptewindows',
    loadChildren: () => import('./pages/comptewindows/comptewindows.module').then( m => m.ComptewindowsPageModule)
  },  {
    path: 'dashboard2',
    loadChildren: () => import('./pages/dashboard2/dashboard2.module').then( m => m.Dashboard2PageModule)
  },
  {
    path: 'windows',
    loadChildren: () => import('./pages/windows/windows.module').then( m => m.WindowsPageModule)
  },
  {
    path: 'nessico',
    loadChildren: () => import('./pages/nessico/nessico.module').then( m => m.NessicoPageModule)
  },
  {
    path: 'oracle',
    loadChildren: () => import('./pages/oracle/oracle.module').then( m => m.OraclePageModule)
  },
  {
    path: 'gaia',
    loadChildren: () => import('./pages/gaia/gaia.module').then( m => m.GaiaPageModule)
  },
  {
    path: 'autres',
    loadChildren: () => import('./pages/autres/autres.module').then( m => m.AutresPageModule)
  },
  {
    path: 'simplissimo',
    loadChildren: () => import('./pages/simplissimo/simplissimo.module').then( m => m.SimplissimoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },


  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
