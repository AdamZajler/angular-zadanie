import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LogowanieComponent} from "./logowanie/logowanie.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogowanieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projekt-angular';
}
