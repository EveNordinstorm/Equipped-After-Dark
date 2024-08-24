import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.errorMessage = '';
    this.authService.register(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  private handleError(error: any): void {
    if (error.status === 400) {
      this.errorMessage = 'Username already exists or invalid data';
    } else {
      this.errorMessage = 'An unexpected error occurred. Please try again later.';
    }
  }
}
