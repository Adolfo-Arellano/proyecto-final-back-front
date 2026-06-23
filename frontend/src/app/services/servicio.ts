import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ServicioItem {
  _id?: string;
  nombre: string;
  descripcion: string;
  precio: number;
  duracion: number;
}

@Injectable({
  providedIn: 'root',
})
export class Servicio {
  // Dirección de API
  private apiUrl = 'http://localhost:3000/api/servicios';

  constructor(private http: HttpClient) {}

  // Obtener la lista completa de servicios desde Atlas
  getServicios(): Observable<ServicioItem[]> {
    return this.http.get<ServicioItem[]>(this.apiUrl);
  }
}
