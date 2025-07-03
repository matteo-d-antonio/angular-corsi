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
    <h1>Discenti</h1>
    <h4>Elenco dei discenti:</h4>
    @for(discente of discenti; track discente.nome) {
      <div>
        <li>{{ discente.nome }}  {{discente.cognome}}</li>
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
