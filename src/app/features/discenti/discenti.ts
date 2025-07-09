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
  templateUrl: './discenti.html',
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

