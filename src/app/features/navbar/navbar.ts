import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './navbar.html',
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
