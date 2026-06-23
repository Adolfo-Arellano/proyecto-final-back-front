import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeluqueroService, Peluquero } from '../../services/peluquero';
import { Servicio, ServicioItem } from '../../services/servicio';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  peluqueros: Peluquero[] = [];
  servicios: ServicioItem[] = [];

  cargando: boolean = true;
  cargandoServicios: boolean = true;

  errorConexion: boolean = false;

  constructor(private peluqueroService: PeluqueroService,
     private servicioService: Servicio
  ) {}

  ngOnInit(): void {
    // carga de barberos al inicio
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

// carga de servicios
    this.servicioService.getServicios().subscribe({
      next: (data) => {
        this.servicios = data;
        this.cargandoServicios = false;
      },
      error: (err) => {
        console.error('Error al conectar con la API de servicios:', err);
        this.cargandoServicios = false;
      }
    });



  }
}