import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Turno {
  _id?:            string;
  clienteNombre:   string;
  clienteApellido: string;
  clienteTelefono: string;
  peluqueroId:     string;
  servicioId:      string;
  fecha:           string;
  hora:            string;
  estado?:         string;
}

@Injectable({ providedIn: 'root' })
export class TurnoService {

  private apiUrl = 'http://localhost:3000/api/turnos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Turno[]> {
    return this.http.get<Turno[]>(this.apiUrl);
  }

  create(data: Turno): Observable<Turno> {
    return this.http.post<Turno>(this.apiUrl, data);
  }

  delete(id: string): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(`${this.apiUrl}/${id}`);
  }
}
