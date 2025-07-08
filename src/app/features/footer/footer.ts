import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
  <div class="ms-footer">
    <div class="ms-footer-content">
      <p>©2025 Progetto Corsi. Tutti i diritti riservati.</p>
      <p>Realizzato da Matteo</p>
    </div>
  </div>
  `,
  styles: `
  .ms-footer {
    background-color: rgb(35, 35, 35);
    padding: 10px;
    box-shadow: 0 -2px 10px rgb(35, 35, 35);
    position: fixed;
    bottom: 0;
    width: 100%;
    }
    .ms-footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    color: white;
    }
    .ms-footer-content p {
    margin: 0 10px;
    font-size: 16px;
    }
    `
})
export class Footer {

}
