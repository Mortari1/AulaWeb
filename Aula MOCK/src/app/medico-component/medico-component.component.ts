import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medico-component',
  templateUrl: './medico-component.component.html',
  styleUrls: ['./medico-component.component.css']
})
export class MedicoComponentComponent {
  @Input()
  medicoInput?: any;
}
