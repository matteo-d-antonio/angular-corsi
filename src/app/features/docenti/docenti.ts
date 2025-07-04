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
    <h1>Docenti</h1>
    <h4>Elenco dei docenti:</h4>
    @for(docente of docenti; track docente.nome) {
      <div>
        <li>{{ docente.nome }}  {{docente.cognome}} </li>
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
