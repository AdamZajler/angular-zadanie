import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.getIsLoggedIn();
  }

  logout(){
    this.authService.logout();
  }
}
