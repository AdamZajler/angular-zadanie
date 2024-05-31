import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css'
})

export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  };
  hasError = false;
  errorMessage = '';

  logowanie() {
    if (this.formData.username === 'test' && this.formData.password === 'test') {
      console.log('Zalogowano pomyślnie');
      this.hasError = false;
      this.errorMessage = '';
    } else {
      this.hasError = true;
      this.errorMessage = 'Wprowadzono błędne dane logowania. Sprawdź ponownie.';
      console.log('Błąd logowania. Sprawdź dane.');
    }
  }
}
