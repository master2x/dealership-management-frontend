import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './Auth/register/register.component';
import { AuthPageComponent } from "./Auth/auth-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AuthPageComponent],
  template: `
        <app-auth-page></app-auth-page>
        `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  esRegistro: boolean = false;
}
