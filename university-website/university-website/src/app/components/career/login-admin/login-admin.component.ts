import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-loginadmin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginadminComponent {
  email: string = '';
  password: string = '';
  remember: boolean = false;
  showPassword: boolean = false;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      // optional auto-redirect
      // this.router.navigate(['/career/admin']);
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  loginAdmin(e?: Event) {
    if (e) e.preventDefault();
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Email dan password wajib diisi.';
      return;
    }

    this.loading = true;

    const payload = { email: this.email, password: this.password };

    this.authService.login(payload).subscribe({
      next: (res) => {
        // backend: { success, message, data: { token, adminId, nama } }
        const data = res.data;

        if (res.success && data && data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('adminId', String(data.adminId));

          if (this.remember) {
            localStorage.setItem('rememberEmail', this.email);
          } else {
            localStorage.removeItem('rememberEmail');
          }

          if (data.nama) {
            localStorage.setItem('adminName', data.nama);
          }

          this.loading = false;
          this.router.navigate(['/career/admin']);
        } else {
          this.loading = false;
          this.errorMessage = res.message || 'Respon server tidak valid.';
        }
      },
      error: (err) => {
        this.loading = false;
        if (err?.error?.message) this.errorMessage = err.error.message;
        else if (err?.message) this.errorMessage = err.message;
        else this.errorMessage = 'Login gagal — cek kembali kredensial.';
      },
    });
  }

  ngOnInit() {
    const remembered = localStorage.getItem('rememberEmail');
    if (remembered) {
      this.email = remembered;
      this.remember = true;
    }
  }
}
