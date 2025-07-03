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
    @for(corso of corsi; track corso.id) {
      <div>
        <li>{{ corso.nome }} - {{corso.annoAccademico}}</li>
      </div>
    }
    
      <pre>{{ corsi | json }}</pre>
  `,
  styles: ``
})
export default class Home implements OnInit {
  http = inject(HttpClient)
  corsi: any[] = [];

  ngOnInit(): void {
      this.http.get<any[]>('http://localhost:8080/corsi/list')
      .subscribe( res => {
        this.corsi = res;
    });
  }
}
