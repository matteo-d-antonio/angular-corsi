import { Component, inject } from '@angular/core';
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
    <form (ngSubmit)="salva()" #form="ngForm">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="nome" placeholder="Nome corso" required [(ngModel)]="corso.nome" name="nome"
        />
        <label for="nome">Nome</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="anno" placeholder="Anno Accademico" required [(ngModel)]="corso.annoAccademico" name="annoAccademico"
        />
        <label for="anno">Anno Accademico</label>
      </div>

      <button class="btn btn-primary" type="submit" [disabled]="form.invalid">Salva</button>
    </form>
  `,
  styles: [],
})
export class Nuovo {
  http = inject(HttpClient);
  router = inject(Router);

  corso: any = {
    nome: '',
    annoAccademico: null
  };

  salva() {
    this.http.post('http://localhost:8080/corsi', this.corso)
      .subscribe(() => {
        alert('Corso creato!');
        this.router.navigate(['/home']);
      });
  }
}