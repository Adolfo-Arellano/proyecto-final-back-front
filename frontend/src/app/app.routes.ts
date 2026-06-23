import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Turnos } from './components/turnos/turnos';

export const routes: Routes = [

  { path: '', component: Home },
  { path: 'turnos', component: Turnos },
  { path: '**', redirectTo: '' }
];
