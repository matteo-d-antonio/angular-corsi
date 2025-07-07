import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule
    ],
  template: `
    <h1 style="margin-bottom:20px">Modifica docente</h1>
    <form *ngIf="docente" (ngSubmit)="salva()">
      <div class="form-floating mb-3">
        <input [(ngModel)]="docente.nome" name="nome" type="text" class="form-control" id="nome" placeholder="Nome docente">
        <label for="nome">Nome</label>
      </div>

      <div class="form-floating mb-3">
        <input [(ngModel)]="docente.cognome" name="cognome" type="text" class="form-control" id="cognome" placeholder="Cognome docente">
        <label for="nome">Cognome</label>
      </div>

      <button class="btn btn-primary" type="submit">Salva</button>
    </form>
  `,
  styles: [],
})
export class ModificaDocente implements OnInit {
    http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);

  docente: any = {};

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get(`http://localhost:8080/docenti/${id}`).subscribe(res => {
        this.docente = res;
      });
    }
  }

  salva() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.put(`http://localhost:8080/docenti/${id}`, this.docente)
        .subscribe(() => {
          alert('Docente aggiornato!');
          this.router.navigate(['/docenti']);
        });
    }
  }
}