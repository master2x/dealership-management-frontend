import { Component } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [LoginComponent, RegisterComponent],
  template: `
    @if (esRegistro) { 
      <app-register (cambiarModo)="esRegistro = false"></app-register>
    } @else {
      <app-login (cambiarModo)="esRegistro = true"></app-login>
    }
  `
})
export class AuthPageComponent {
  esRegistro = true;
}
