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
    <h1 style="margin-bottom:20px">Aggiungi Nuovo Docente</h1>
    <form (ngSubmit)="salvaDocente()" #form="ngForm">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="nome"
          placeholder="Nome docente"
          required
          [(ngModel)]="nuovoDocente.nome"
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
          [(ngModel)]="nuovoDocente.cognome"
          name="cognome"
        />
        <label for="cognome">Cognome</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="dataNascita"
          placeholder="DataNascita"
          required
          [(ngModel)]="nuovoDocente.dataNascita"
          name="dataNascita"
        />
        <label for="dataNascita">Data di nascita</label>
      </div>

      <button class="btn btn-primary" type="submit" [disabled]="form.invalid">Salva</button>
    </form>
  `,
  styles: [],
})
export class NuovoDocente {
  nuovoDocente = {
    nome: '',
    cognome: '',
    dataNascita: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  salvaDocente() {
    this.http.post('http://localhost:8080/docenti', this.nuovoDocente)
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