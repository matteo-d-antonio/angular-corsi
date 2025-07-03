import { Component } from '@angular/core';
import { Navbar } from './features/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [
    Navbar],
  template: `
    <app-navbar></app-navbar>
  `,
  styles: [],
})
export class App {
  
}
