import { Routes,RouterModule } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';


export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  // { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  // { path: 'about', loadChildren: () => import('./about/about.route').then(m=>m.default)},
  {path: 'Home',
    component: Home,
    title:'add to home'
  },
  {
    path:'About',
    component:About,
    title:'about us'
  }


];
