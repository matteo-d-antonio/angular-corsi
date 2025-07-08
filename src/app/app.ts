import { Component } from '@angular/core';
import { Navbar } from './features/navbar/navbar';
import { Footer } from './features/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Footer],
  template: `
    <app-navbar></app-navbar>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class App {
  
}
