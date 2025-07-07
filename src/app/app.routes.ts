import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./features/home/home')},
    {path: 'docenti', loadComponent: () => import('./features/docenti/docenti')},
    {path: 'discenti', loadComponent: () => import('./features/discenti/discenti')},
    {path: 'home/modifica/:id', loadComponent: () => import('./features/home/util/modifica').then(m => m.Modifica)},
    {path: 'home/nuovo', loadComponent: () => import('./features/home/util/nuovo').then(m => m.Nuovo)},
    {path: 'docenti/nuovo', loadComponent: () => import('./features/docenti/util/nuovoDocente').then(m => m.NuovoDocente)},
    {path: 'docenti/modifica/:id', loadComponent: () => import('./features/docenti/util/modificaDocente').then(m => m.ModificaDocente)},
    {path: 'discenti/nuovo', loadComponent: () => import('./features/discenti/util/nuovoDiscente').then(m => m.NuovoDiscente)},
    {path: 'discenti/modifica/:id', loadComponent: () => import('./features/discenti/util/modificaDiscente').then(m => m.ModificaDiscente)},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
