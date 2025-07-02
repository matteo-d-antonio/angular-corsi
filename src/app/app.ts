import { Component } from '@angular/core';
import { Navbar } from './features/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar],
  template: `
    <app-navbar></app-navbar>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  
}
