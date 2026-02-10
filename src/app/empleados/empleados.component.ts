import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

}
