import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    JsonPipe,
    RouterOutlet,
    RouterLink
  ],
  template: `
    <div class="ms-title">
    <div class="ms-card-info">
      <h1>Corsi</h1>
      <a routerLink="/home/nuovo" class="btn btn-primary">Aggiungi Corso</a>
    </div>
    <h4>Elenco dei corsi disponibili:</h4>
    </div>
    @for(corso of corsi; track corso.id) {
      <div class="card" style="width: 18rem; margin: 10px; display: inline-block; background-color:rgb(57, 57, 57); color: white;">
        <div import class="card-body">
          <h4 class="card-title">{{ corso.nome}} - {{ corso.annoAccademico }}</h4>
          <div class="ms-card-btn">
          <a [routerLink]="['/home/modifica', corso.id]" class="btn btn btn-outline-light">modifica</a>
          <button (click)="eliminaCorso(corso.id)" class="btn btn btn-outline-danger">elimina</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: `
    
  `
})
export default class Home implements OnInit {
  http = inject(HttpClient);
  corsi: any[] = [];
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/corsi/list')
      .subscribe(res => {
        this.corsi = res;
        this.cdr.detectChanges();
      });
  }

  eliminaCorso(id: number) {
  if (confirm('Sei sicuro di voler eliminare questo corso?')) {
    this.http.delete(`http://localhost:8080/corsi/${id}`)
      .subscribe({
        next: () => {
          
          this.corsi = this.corsi.filter(d => d.id !== id);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Errore durante l\'eliminazione del corso:', err);
          alert('Errore durante l\'eliminazione.');
        }
      });
  }
 }
}
