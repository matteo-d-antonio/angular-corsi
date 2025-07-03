import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./features/home/home')},
    {path: 'docenti', loadComponent: () => import('./features/docenti/docenti')},
    {path: 'discenti', loadComponent: () => import('./features/discenti/discenti')},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
