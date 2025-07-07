import { Component, effect, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-docenti',
  imports: [
    JsonPipe,
    RouterOutlet,
    RouterLink
  ],
  template: `
    <div class="ms-title">
    <div class="ms-card-info">
      <h1>Docenti</h1>
      <a href="/docenti/nuovo" class="btn btn-primary">Aggiungi Docente</a>
    </div>
    <h4>Elenco dei docenti:</h4>
    </div>
    @for(docente of docenti; track docente.id) {
      <div class="card" style="width: 18rem; margin: 10px; display: inline-block; background-color:rgb(57, 57, 57); color: white;">
        <div class="card-body">
          <h4 class="card-title">{{ docente.nome }}  {{docente.cognome}}</h4>
          <div class="ms-card-btn">
          <a [routerLink]="['/docenti/modifica', docente.id]" class="btn btn btn-outline-light">modifica</a>
          <button (click)="eliminaDocente(docente.id)" class="btn btn btn-outline-danger">elimina</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: ``
})
export default class Docenti implements OnInit {
  http = inject(HttpClient);
  docenti: any[] = [];
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/docenti/list')
      .subscribe(res => {
        this.docenti = res;
        this.cdr.detectChanges();
      });
  }

  eliminaDocente(id: number) {
  if (confirm('Sei sicuro di voler eliminare questo docente?')) {
    this.http.delete(`http://localhost:8080/docenti/${id}`)
      .subscribe({
        next: () => {
         
          this.docenti = this.docenti.filter(d => d.id !== id);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Errore durante l\'eliminazione del docente:', err);
          alert('Errore durante l\'eliminazione.');
        }
      });
  }
}

}
