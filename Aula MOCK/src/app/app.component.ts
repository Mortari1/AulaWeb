import { Component } from '@angular/core';
import data from '../assets/data.json';
import medico from '../assets/medico.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aulamock';
  items = data.usuarios
  doctor = medico.medicos
}
