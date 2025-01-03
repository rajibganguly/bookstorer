import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AllbookDashboardComponent } from './allbook-dashboard/allbook-dashboard.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoginSectionComponent } from './login-section/login-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, CommonModule, RouterLink, LoginSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bookstore-ng-app';
}
