import { Component, effect, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-docenti',
  imports: [
    JsonPipe
  ],
  template: `
    <h1>Docenti</h1>
    <h4>Elenco dei docenti:</h4>
    @for(corso of corsi; track corso.id) {
      <div>
        <li>{{ corso.docenteDTOLight.nome }}  {{corso.docenteDTOLight.cognome}} --> {{corso.nome}}</li>
      </div>
    }
    
  `,
  styles: ``
})
export default class Docenti implements OnInit {
  http = inject(HttpClient)
  corsi: any[] = [];

  ngOnInit(): void {
      this.http.get<any[]>('http://localhost:8080/corsi/list')
      .subscribe( res => {
        this.corsi = res;
    });
  }

}
