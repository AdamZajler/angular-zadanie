import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

import { MenuComponent } from '../menu/menu.component';

import { AuthService } from '../auth.service';
import {LogowanieComponent} from "../logowanie/logowanie.component";


describe('DashboardComponent', () => {

  let component: DashboardComponent;
  let form: LogowanieComponent;

  let fixture: ComponentFixture<DashboardComponent>;

  let authService: AuthService;



  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [DashboardComponent, MenuComponent],
      providers: [AuthService],
    });



    fixture = TestBed.createComponent(DashboardComponent);
    form = TestBed.createComponent(LogowanieComponent).componentInstance;

    component = fixture.componentInstance;

    authService = TestBed.inject(AuthService);


    form.formData = {
      username: 'test',
      password: 'test',
    }

    form.logowanie();
  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });



  it('should display the menu after logging in', () => {
    console.log("XS3: ", fixture.debugElement.nativeElement.querySelector('.app-menu'))
    fixture.detectChanges();
    console.log("XS2: ", fixture.debugElement.nativeElement.querySelector('.app-menu'))

    const menu = fixture.debugElement.nativeElement.querySelector('.app-menu');
    console.log("XS: ", fixture.debugElement.nativeElement.querySelector('.app-menu'))
    expect(menu).toBeTruthy();

  });



  // it('should hide the menu after logging out', () => {
  //
  //   authService.logout(); // Zasymuluj wylogowanie
  //   console.log("XD1: ",  fixture.debugElement.nativeElement.querySelector('app-menu'))
  //   fixture.detectChanges(); // Zaktualizuj widok
  //
  //
  //
  //   const menu = fixture.debugElement.nativeElement.querySelector('app-menu');
  //   console.log("XD2: ",  fixture.debugElement.nativeElement.querySelector('app-menu'))
  //
  //   expect(menu).toBeFalsy();
  //
  // });

});
