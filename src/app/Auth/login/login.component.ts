import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from "@angular/router";
import {ReactiveFormsModule, FormControl, FormBuilder, Validators, FormGroup, Form} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() cambiarModo = new EventEmitter<void>();

  loginForm!: FormGroup;
     constructor(private formbuilder: FormBuilder){
       this.loginForm = this.formbuilder.group({
        email: ["", [Validators.email, Validators.required]],
        password: ["", [Validators.required, Validators.minLength(8)]],
      }) 
     }
     onSubmit(){
      console.log(this.loginForm.value);
      this.loginForm.reset();
      console.log("Iniciaste sesion");
     }
}
