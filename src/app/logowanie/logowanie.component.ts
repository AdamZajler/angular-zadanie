import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../auth.service";
import { Router } from '@angular/router'; // Import Router

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
  isLoggedIn: boolean = false;
  formData = {
    username: '',
    password: ''
  };
  hasError = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.getIsLoggedIn();
  }

  logowanie() {
    if(this.isLoggedIn) {
      console.log('Już jesteś zalogowany!!');
      this.hasError = true;
      this.errorMessage = 'Już jesteś zalogowany!!';
    } else if (this.formData.username === 'test' && this.formData.password === 'test') {
      console.log('Zalogowano pomyślnie');

      this.authService.login();
      this.hasError = false;
      this.errorMessage = '';

      this.router.navigate(['/dashboard']);
    } else {
      this.hasError = true;
      this.errorMessage = 'Wprowadzono błędne dane logowania. Sprawdź ponownie.';
      console.log('Błąd logowania. Sprawdź dane.');
    }
  }

}
