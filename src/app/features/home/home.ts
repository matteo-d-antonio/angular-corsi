import { Component, effect, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    JsonPipe
  ],
  template: `
    <h1>Corsi</h1>
    <h4>Elenco dei corsi disponibili:</h4>
    @for(corso of corsi; track corso.nome) {
      <div>
        <li>{{ corso.nome }} - {{corso.annoAccademico}}</li>
      </div>
    }
  `,
  styles: ``
})
export default class Home implements OnInit {
  http = inject(HttpClient)
  corsi: any[] = [];

  ngOnInit(): void {
      this.http.get<any[]>('http://localhost:8080/corsi/list')
      .subscribe( res => {
        console.log('Corsi ricevuti:', res);
        this.corsi = res;
    });
  }
}
