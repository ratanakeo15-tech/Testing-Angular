import { Routes,RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'about', loadChildren: () => import('./about/about.route').then(m=>m.default)},
  {
    path: '**',
    redirectTo: '/home'
  }

];
