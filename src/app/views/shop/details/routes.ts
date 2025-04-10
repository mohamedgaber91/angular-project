import { Routes } from "@angular/router";

export const detailsRoutes:Routes=[
  {
    path:'details',
    loadComponent:()=>import('./details.component').then((m)=>m.DetailsComponent)
  }
]
