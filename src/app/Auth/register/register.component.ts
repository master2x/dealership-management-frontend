import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from "@angular/router";
import {ReactiveFormsModule, FormControl, FormBuilder, Validators, FormGroup, Form} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   @Output() cambiarModo = new EventEmitter<void>();

   registerForm!: FormGroup;

   constructor(private formbuilder: FormBuilder){
     this.registerForm = this.formbuilder.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      tel: ["", [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    }) 
   }

    onSubmit(){
    if(this.registerForm.invalid)
      return;
    console.log(this.registerForm.value);
    this.registerForm.reset();
    console.log("Datos enviados");
    }
  }
  
   
