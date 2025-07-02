import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
  <div class="ms-navbar">
    <div class="ms-navbar-title">
    <span>
      <h1>progetto corsi</h1>
    </span>
    <ul class="nav nav-underline">
      <li class="nav-item">
        <h4><a class="nav-link" href="#">Home</a></h4>
      </li>
      <li class="nav-item">
        <h4><a class="nav-link" href="#">Docenti</a></h4>
      </li>
      <li class="nav-item">
        <h4><a class="nav-link" href="#">Discenti</a></h4>
      </li>
    </ul>
    </div>
  </div>
  `,
  styles: `
.ms-navbar {
  background-color: rgb(33, 33, 33);
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgb(33, 33, 33);
}
.ms-navbar-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
  li a{
  text-decoration: none;
  color: white;
  }`
})
export class Navbar {

}
