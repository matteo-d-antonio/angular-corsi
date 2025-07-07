import { Component, effect, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-docenti',
  imports: [
    JsonPipe
  ],
  template: `
    <div class="ms-title">
    <div class="ms-card-info">
      <h1>Docenti</h1>
      <a href="/docenti/nuovo" class="btn btn-primary">Aggiungi Docente</a>
    </div>
    <h4>Elenco dei docenti:</h4>
    </div>
    @for(docente of docenti; track docente.nome) {
      <div class="card" style="width: 18rem; margin: 10px; display: inline-block; background-color:rgb(57, 57, 57); color: white;">
        <div class="card-body">
          <h5 class="card-title">{{ docente.nome }}  {{docente.cognome}}</h5>
          <div class="ms-card-btn">
          <a href="#" class="btn btn btn-outline-light">modifica</a>
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
  docenti: any[] = [];
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/docenti/list')
      .subscribe(res => {
        this.docenti = res;
        this.cdr.detectChanges(); // Trigger change detection
      });
  }

}
