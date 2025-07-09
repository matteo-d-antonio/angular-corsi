import { Component, effect, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-docenti',
  imports: [
    JsonPipe,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './docenti.html',
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
        this.cdr.detectChanges();
      });
  }

  eliminaDocente(id: number) {
  if (confirm('Sei sicuro di voler eliminare questo docente?')) {
    this.http.delete(`http://localhost:8080/docenti/${id}`)
      .subscribe({
        next: () => {
         
          this.docenti = this.docenti.filter(d => d.id !== id);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Errore durante l\'eliminazione del docente:', err);
          alert('Errore durante l\'eliminazione.');
        }
      });
  }
}

}
