import { Component, effect, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-discenti',
  imports: [
    JsonPipe
  ],
  template: `
    <div class="ms-title">
    <div class="ms-card-info">
      <h1>Discenti</h1>
      <a href="/discenti/nuovo" class="btn btn-primary">Aggiungi Discente</a>
    </div>
    <h4>Elenco dei discenti:</h4>
    </div>
    @for(discente of discenti; track discente.nome) {
      <div class="card" style="width: 18rem; margin: 10px; display: inline-block; background-color:rgb(57, 57, 57); color: white;">
        <div class="card-body">
          <h5 class="card-title">{{ discente.nome }}  {{discente.cognome}}</h5>
          <div class="ms-card-btn">
          <a href="/discenti/modifica" class="btn btn btn-outline-light">modifica</a>
          <a href="#" class="btn btn btn-outline-danger">elimina</a>
          </div>
        </div>
      </div>
    }
    
  `,
  styles: ``
})
export default class Docenti implements OnInit {
  http = inject(HttpClient);
  discenti: any[] = [];
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/discenti/list')
      .subscribe(res => {
        this.discenti = res;
        this.cdr.detectChanges(); // Trigger change detection
      });
  }

}
