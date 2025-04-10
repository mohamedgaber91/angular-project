import { Routes } from "@angular/router";

export const aboutRoutes:Routes=[
  {
    path:'about',
    loadComponent:()=>import('./about.component').then((m)=>m.AboutComponent)
  }
]
