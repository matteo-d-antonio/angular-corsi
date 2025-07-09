import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    JsonPipe,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './home.html',
  styles: `
    
  `
})
export default class Home implements OnInit {
  http = inject(HttpClient);
  corsi: any[] = [];
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/corsi/list')
      .subscribe(res => {
        this.corsi = res;
        this.cdr.detectChanges();
      });
  }

  eliminaCorso(id: number) {
  if (confirm('Sei sicuro di voler eliminare questo corso?')) {
    this.http.delete(`http://localhost:8080/corsi/${id}`)
      .subscribe({
        next: () => {
          
          this.corsi = this.corsi.filter(d => d.id !== id);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Errore durante l\'eliminazione del corso:', err);
          alert('Errore durante l\'eliminazione.');
        }
      });
  }
 }
}
