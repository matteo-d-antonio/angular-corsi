import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styles: `
  .ms-footer {
    background-color: rgb(35, 35, 35);
    padding: 10px;
    box-shadow: 0 -2px 10px rgb(35, 35, 35);
    position: fixed;
    bottom: 0;
    width: 100%;
    }
    `
})
export class Footer {

}
