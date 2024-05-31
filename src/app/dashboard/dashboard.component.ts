import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.isLoggedIn = this.authService.getIsLoggedIn();
    console.log("ZALOGOWANY?????", this.isLoggedIn)
    if(!this.isLoggedIn){
      this.router.navigate(['/']);
    }
  }
}
