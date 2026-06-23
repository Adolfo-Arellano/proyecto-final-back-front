import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Turno, TurnoService } from '../../services/turno';
import { ServicioItem } from '../../services/servicio';
import { Peluquero } from '../../services/peluquero';

@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './turnos.html',
  styleUrl: './turnos.css'
})
export class Turnos implements OnInit {

  turno: Turno = {
    clienteNombre:   '',
    clienteApellido: '',
    clienteTelefono: '',
    peluqueroId:     '',
    servicioId:      '',
    fecha:           '',
    hora:            ''
  };

  enviado  = false;
  errorMsg = '';

  peluqueros: Peluquero[] = [];
  servicios:  ServicioItem[]  = [];

  todosLosHorarios: string[] = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00'
  ];

  horariosDisponibles: string[] = [];

  horariosOcupados: string[] = [];

  constructor(
    private turnoService: TurnoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarPeluqueros();
    this.cargarServicios();
  }

  cargarPeluqueros(): void {
    fetch('http://localhost:3000/api/peluqueros')
      .then(r => r.json())
      .then((data: Peluquero[]) => this.peluqueros = data)
      .catch(() => this.peluqueros = []);
  }

  cargarServicios(): void {
    fetch('http://localhost:3000/api/servicios')
      .then(r => r.json())
      .then((data: ServicioItem[])  => this.servicios  = data)
      .catch(() => this.servicios = []);
  }

  actualizarHorarios(): void {
    if (!this.turno.peluqueroId || !this.turno.fecha) {
      this.horariosDisponibles = [];
      this.turno.hora = '';
      return;
    }

    fetch(`http://localhost:3000/api/turnos/ocupados?peluqueroId=${this.turno.peluqueroId}&fecha=${this.turno.fecha}`)
      .then(r => r.json())
      .then((ocupados: string[]) => {
        this.horariosOcupados = ocupados;
        this.horariosDisponibles = this.todosLosHorarios.filter(
          h => !this.horariosOcupados.includes(h)
        );
        this.turno.hora = '';
      })
      .catch(() => {
        this.horariosDisponibles = [...this.todosLosHorarios];
      });
  }

  formularioValido(): boolean {
    const t = this.turno;
    return !!(
      t.clienteNombre.trim() &&
      t.clienteApellido.trim() &&
      t.clienteTelefono.trim() &&
      t.peluqueroId &&
      t.servicioId &&
      t.fecha &&
      t.hora
    );
  }

  reservar(): void {
    this.errorMsg = '';

    if (!this.formularioValido()) {
      this.errorMsg = 'Completá todos los campos antes de continuar.';
      return;
    }

    this.turnoService.create(this.turno).subscribe({
      next: () => { this.enviado = true; },
      error: (err) => {
        this.errorMsg = err.error?.error || 'Error al reservar. Intentá de nuevo.';
      }
    });
  }

  volverAlInicio(): void {
    this.router.navigate(['/']);
  }
}
