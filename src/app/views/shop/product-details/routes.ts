import { Routes } from "@angular/router";

export const productDetailsRoutes:Routes=[
  {
    path:'products/:id',
    loadComponent:()=>import('./product-details.component').then((m=>m.ProductDetailsComponent))
  }
]
