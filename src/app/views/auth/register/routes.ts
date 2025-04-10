import { Routes } from "@angular/router";

export const registerRoutes:Routes=[
  {
    path:'register',
    loadComponent:()=>import('./register.component').then((m)=>m.RegisterComponent)
  }
]
