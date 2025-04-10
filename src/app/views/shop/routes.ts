import { Routes } from "@angular/router";

export const shopsRoutes:Routes=[
  {
    path:'shop',
    loadComponent:()=>import('./shop.component').then((m=>m.ShopComponent))
  }
]
