import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'meu-cartao',
    loadComponent: () => import('./meu-cartao/meu-cartao.page').then(m => m.MeuCartaoPage),
  },
  
   {
  path: 'gatinhos',
  loadComponent: () => import('./gatinhos/gatinhos.page').then(m => m.GatinhosPage),

  },
];
