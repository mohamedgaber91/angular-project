import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./HomePage.component').then(m => m.HomePage),
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./HomePage.component').then(m => m.HomePage),
    pathMatch: 'full'
  }
];
