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
    <h1 style="margin-bottom:20px">Aggiungi Nuovo Discente</h1>
    <form (ngSubmit)="salvaDiscente()" #form="ngForm">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="nome"
          placeholder="Nome discente"
          required
          [(ngModel)]="nuovoDiscente.nome"
          name="nome"
        />
        <label for="nome">Nome</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="cognome"
          placeholder="Cognome"
          required
          [(ngModel)]="nuovoDiscente.cognome"
          name="cognome"
        />
        <label for="cognome">Cognome</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="eta"
          placeholder="eta"
          required
          [(ngModel)]="nuovoDiscente.eta"
          name="eta"
        />
        <label for="eta">Età</label>
      </div>
      

      <button class="btn btn-primary" type="submit" [disabled]="form.invalid">Salva</button>
    </form>
  `,
  styles: [],
})
export class NuovoDiscente {
  nuovoDiscente = {
    nome: '',
    cognome: '',
    eta: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  salvaDiscente() {
    this.http.post('http://localhost:8080/discenti', this.nuovoDiscente)
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