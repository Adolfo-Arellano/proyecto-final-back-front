import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeluqueroService, Peluquero } from '../../services/peluquero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  peluqueros: Peluquero[] = [];
  cargando: boolean = true;
  errorConexion: boolean = false;

  constructor(private peluqueroService: PeluqueroService) {}

  ngOnInit(): void {
    // al inicio
    this.peluqueroService.getPeluqueros().subscribe({
      next: (data) => {
        this.peluqueros = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al conectar con la API de Barber App:', err);
        this.cargando = false;
        this.errorConexion = true;
      }
    });
  }
}