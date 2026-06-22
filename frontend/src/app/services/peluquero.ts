import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Peluquero {
  _id?: string;
  nombre: string;
  descripcion: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeluqueroService {
  private apiUrl = 'http://localhost:3000/api/peluqueros';

  constructor(private http: HttpClient) {}

  getPeluqueros(): Observable<Peluquero[]> {
    return this.http.get<Peluquero[]>(this.apiUrl);
  }
}