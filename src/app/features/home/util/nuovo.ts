import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // per ngModel
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule
    ],
  template: `
    <h1 style="margin-bottom:20px">Aggiungi Nuovo Corso</h1>
    <form (ngSubmit)="salvaCorso()" #form="ngForm">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="nome"
          placeholder="Nome corso"
          required
          [(ngModel)]="nuovoCorso.nome"
          name="nome"
        />
        <label for="nome">Nome</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="anno"
          placeholder="Anno Accademico"
          required
          [(ngModel)]="nuovoCorso.annoAccademico"
          name="annoAccademico"
        />
        <label for="anno">Anno Accademico</label>
      </div>

      <button class="btn btn-primary" type="submit" [disabled]="form.invalid">Salva</button>
    </form>
  `,
  styles: [],
})
export class Nuovo {
  nuovoCorso = {
    nome: '',
    annoAccademico: '',
    docenteDTOLight: null,
    discentiDTOLight: []
  };

  constructor(private http: HttpClient, private router: Router) {}

  salvaCorso() {
    this.http.post('http://localhost:8080/corsi', this.nuovoCorso)
      .subscribe({
        next: res => {
          console.log('Corso salvato:', res);
          this.router.navigate(['home']);
        },
        error: err => {
          console.error('Errore durante il salvataggio del corso', err);
        }
      });
  }
}