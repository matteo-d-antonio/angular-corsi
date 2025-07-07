import { Component, effect, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-discenti',
  imports: [
    JsonPipe,
    RouterOutlet,
    RouterLink
  ],
  template: `
    <div class="ms-title">
    <div class="ms-card-info">
      <h1>Discenti</h1>
      <a href="/discenti/nuovo" class="btn btn-primary">Aggiungi Discente</a>
    </div>
    <h4>Elenco dei discenti:</h4>
    </div>
    @for(discente of discenti; track discente.id) {
      <div class="card" style="width: 18rem; margin: 10px; display: inline-block; background-color:rgb(57, 57, 57); color: white;">
        <div class="card-body">
          <h4 class="card-title">{{ discente.nome }}  {{discente.cognome}}</h4>
          <div class="ms-card-btn">
          <a [routerLink]="['/discenti/modifica', discente.id]" class="btn btn btn-outline-light">modifica</a>
          <button (click)="eliminaDiscente(discente.id)" class="btn btn btn-outline-danger">elimina</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: ``
})
export default class Discenti implements OnInit {
  http = inject(HttpClient);
  discenti: any[] = [];
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/discenti/list')
      .subscribe(res => {
        this.discenti = res;
        this.cdr.detectChanges();
      });
  }

  eliminaDiscente(id: number) {
  if (confirm('Sei sicuro di voler eliminare questo discente?')) {
    this.http.delete(`http://localhost:8080/discenti/${id}`)
      .subscribe({
        next: () => {
         
          this.discenti = this.discenti.filter(d => d.id !== id);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Errore durante l\'eliminazione del discente:', err);
          alert('Errore durante l\'eliminazione.');
        }
      });
  }
}

}

