

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { AuthServices } from '../../../shared/auth';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, TranslateModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    public translate: TranslateService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public authService: AuthServices,

  ) {}
  private isBase64(str: string): boolean {
    try {
      return btoa(atob(str)) === str;
    } catch (e) {
      return false;
    }
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      FmcToken: localStorage.getItem('FmcToken')
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      Swal.fire({
        title: 'Invalid Input',
        text: 'Please enter your username and password.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    const loginData = this.loginForm.value;
    // const isAdmin = loginData.userName === this.isBase64(environment.adminEmail) ? atob(environment.adminEmail) : environment.adminEmail && loginData.password === this.isBase64(environment.adminPass) ? atob(environment.adminPass) : environment.adminPass;

    const apiUrl = `${environment.apiUrl}${environment.loginEndpoint}`;

console.log(loginData);

    this.http.post(apiUrl, loginData)
      .subscribe({
        next: (response: any) => {
          const successMsg =  'Login Successful';
          const welcomeMsg =  'Welcome back!';
          this.authService.login();
          console.log('res',);

          console.log('status after login:', this.authService.isLoggedIn$);
          localStorage.setItem('token', response.response.token.accessToken);

          Swal.fire({
            title: successMsg,
            text: welcomeMsg,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
              this.router.navigate([this.router.url]);
            });
          });
        },
        error: (err) => {
          Swal.fire({
            title: 'Login Failed',
            text: err.error?.message || 'Invalid credentials.',
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
        }
      });
  }
}
