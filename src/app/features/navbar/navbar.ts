import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  template: `
  <div class="ms-navbar">
    <div class="ms-navbar-title">
      <span>
        <h1>progetto corsi</h1>
      </span>
      <ul class="nav nav-underline">
        <li class="nav-item">
          <h4><a class="nav-link" routerLink="home">Home</a></h4>
        </li>
        <li class="nav-item">
          <h4><a class="nav-link" routerLink="docenti">Docenti</a></h4>
        </li>
        <li class="nav-item">
          <h4><a class="nav-link" routerLink="discenti">Discenti</a></h4>
        </li>
      </ul>
    </div>
  </div>

  <div class="ms-navbar-content">
   <router-outlet></router-outlet>
  </div>
  `,
  styles: `
  .ms-navbar {
  background-color: rgb(35, 35, 35);
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgb(35, 35, 35);
  }
  .ms-navbar-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  }
  li h4 a{
  text-decoration: none;
  color: white;
  }
  .ms-navbar-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color:rgb(35, 35, 35);
  border-radius: 12px;
}
  `
})
export class Navbar {

}
