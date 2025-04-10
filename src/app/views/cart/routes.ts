import { Routes } from '@angular/router';

export const cartRoutes: Routes = [
  {
    path: 'cart',
    loadComponent: () => import('./cart.component').then(m => m.CartComponent)
  }
];
