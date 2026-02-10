import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formulariopractica',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulariopractica.component.html',
  styleUrl: './formulariopractica.component.css'
})
export class FormulariopracticaComponent {

   usuarioForm! : FormGroup;

  constructor(private formbuilder: FormBuilder){
    this.usuarioForm = this.formbuilder.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]]
    }) 
  }

}
  

