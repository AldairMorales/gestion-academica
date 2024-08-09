import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;
      console.log('Correo electrónico:', email);
      console.log('Contraseña:', password);
      // Aquí puedes hacer una llamada al servicio de autenticación
    }
  }
}
