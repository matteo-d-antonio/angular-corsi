import { Component, effect, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-discenti',
  imports: [
    JsonPipe
  ],
  template: `
    <h1>Discenti</h1>
    <h4>Elenco dei discenti:</h4>
    @for(corso of corsi; track corso.id) {
      <div>
        <li>{{ corso.discentiDTOLight.nome }}  {{corso.discenteDTOLight.cognome}}</li>
      </div>
    }
    
  `,
  styles: ``
})
export default class Discenti implements OnInit {
  http = inject(HttpClient)
  corsi: any[] = [];

  ngOnInit(): void {
      this.http.get<any[]>('http://localhost:8080/corsi/list')
      .subscribe( res => {
        this.corsi = res;
    });
  }

}
