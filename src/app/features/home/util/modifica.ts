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
    <h1 style="margin-bottom:20px">Modifica corso</h1>
    <form *ngIf="corso" (ngSubmit)="salva()">
      <div class="form-floating mb-3">
        <input [(ngModel)]="corso.nome" name="nome" type="text" class="form-control" id="nome" placeholder="Nome corso">
        <label for="nome">Nome</label>
      </div>
      <div class="form-floating mb-3">
        <input [(ngModel)]="corso.annoAccademico" name="annoAccademico" type="number" class="form-control" id="anno" placeholder="Anno accademico">
        <label for="anno">Anno Accademico</label>
      </div>
      <button class="btn btn-primary" type="submit">Salva</button>
    </form>
  `,
  styles: [],
})
export class Modifica implements OnInit {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);

  corso: any = {};

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get(`http://localhost:8080/corsi/${id}`).subscribe(res => {
        this.corso = res;
      });
    }
  }

  salva() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.put(`http://localhost:8080/corsi/${id}`, this.corso)
        .subscribe(() => {
          alert('Corso aggiornato!');
          this.router.navigate(['/home']);
        });
    }
  }
}