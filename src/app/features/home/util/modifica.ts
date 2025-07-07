import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    ],
  template: `
    <h1 style="margin-bottom:20px">Modifica corso</h1>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Nome</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="anno@example.com">
      <label for="floatingInput">Anno Accademico</label>
    </div>
    <button class="btn btn-primary">Salva</button>
  `,
  styles: [],
})
export class Modifica {
  
}