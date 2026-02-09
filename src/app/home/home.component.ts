import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuario = "Hola";
  esAdmin: boolean = false;
  mensaje = ""

  paises = [
    { id: 1, pais: "México" },
    { id: 2, pais: "Argentina" },
    { id: 3, pais: "España" },
    { id: 4, pais: "Perú" },
    { id: 5, pais: "Chile" }
  ];

  guardar(){ // Funcion que se ejecuta cuando se hace click en el boton guardar
    alert("Guardado")
  }
}
