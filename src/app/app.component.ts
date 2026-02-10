import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './Auth/register/register.component';
import { AuthPageComponent } from "./Auth/auth-page.component";
import  {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AuthPageComponent, RouterOutlet, RouterLink],
  template: `
        <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  esRegistro: boolean = false;
}
