import { Routes } from '@angular/router';
import { RegisterComponent } from './Auth/register/register.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { AuthPageComponent } from './Auth/auth-page.component';
import { ComponentFixture } from '@angular/core/testing';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VentasComponent } from './ventas/ventas.component';
import { FormulariopracticaComponent } from './formulariopractica/formulariopractica.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthPageComponent
       
    },
    {   path: 'formulario',
        component: FormulariopracticaComponent

    },
    {
        path: 'empleados',
        component: EmpleadosComponent,
        children: [
            {
                path: 'clientes',
                component: ClientesComponent
            },
            {
                path: 'ventas',
                component: VentasComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
