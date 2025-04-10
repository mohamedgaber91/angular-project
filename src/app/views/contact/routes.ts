import { Routes } from "@angular/router";

export const contactRoutes:Routes=[
 {
  path:'contact',
  loadComponent:()=>import('./contact.component').then((m)=>m.ContactComponent)
}
]
