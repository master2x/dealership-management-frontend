import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

}
