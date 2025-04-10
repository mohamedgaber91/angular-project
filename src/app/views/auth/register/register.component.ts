
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServices } from '../../../shared/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;
  otpForm: FormGroup;
  otpStep = false;
  FmcToken = 'FmcToken';
  staticOtp = '4444';
  userData: any = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService :AuthServices
  ) {
    this.registerForm = this.fb.group({
      FullName: ['', Validators.required],
      Mobile: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
    });

    this.otpForm = this.fb.group({
      otp1: ['', [Validators.required, Validators.pattern('^[0-9]{1}$')]],
      otp2: ['', [Validators.required, Validators.pattern('^[0-9]{1}$')]],
      otp3: ['', [Validators.required, Validators.pattern('^[0-9]{1}$')]],
      otp4: ['', [Validators.required, Validators.pattern('^[0-9]{1}$')]],
    });
  }

  onInitialSubmit() {
    if (this.registerForm.valid) {
      this.userData = this.registerForm.value;
      const mobileNumber = this.userData.Mobile.trim();

      this.http.post(
        `http://hassanesco-001-site15.ltempurl.com/api/User/CheckAccount?mobile=${mobileNumber}`,
        null
      ).subscribe({
        next: (response: any) => {
          console.log('Account check response:', response);

          if (response && response.isRegistered) {
            Swal.fire({
              title: 'Mobile number is already registered!',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          } else {
            this.otpStep = true;
          }
        },
        error: (err) => {
          if (err.status === 409) {
            Swal.fire({
              title: 'Mobile number is already registered!',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          } else {
            console.error('Another error occurred', err);
            Swal.fire({
              title: 'Error',
              text: 'An error occurred while checking the account.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        }
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Please fill the required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }


  onOtpInput(event: any, nextField: string) {
    const value = event.target.value;
    if (value.length === 1 && nextField) {
      const nextInput = document.querySelector(`[formControlName=${nextField}]`) as HTMLInputElement;
      nextInput?.focus();
    }
    if (value.length === 0) {
      const prevField = this.getPreviousField(event.target);
      if (prevField) {
        prevField.focus();
      }
    }
  }

  getPreviousField(currentInput: HTMLInputElement): HTMLInputElement | null {
    const formControls = Array.from(document.querySelectorAll('input[formControlName]')) as HTMLInputElement[];
    const currentIndex = formControls.indexOf(currentInput);

    if (currentIndex > 0) {
      return formControls[currentIndex - 1];
    }

    return null;
  }


  onOtpSubmit() {
    const otpValue = `${this.otpForm.value.otp1}${this.otpForm.value.otp2}${this.otpForm.value.otp3}${this.otpForm.value.otp4}`;

    if (otpValue !== this.staticOtp) {
      Swal.fire({
        title: 'Invalid OTP',
        text: 'The OTP you entered is incorrect.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      return;
    }

    const formData = new FormData();
    formData.append('FullName', this.userData.FullName);
    formData.append('Mobile', this.userData.Mobile);
    formData.append('Email', this.userData.Email);
    formData.append('Password', this.userData.Password);
    formData.append('Otp', otpValue);
    formData.append('FmcToken', this.FmcToken);

    console.log('data', formData);

    this.http.post('http://hassanesco-001-site15.ltempurl.com/api/User/SignUp', formData)
      .subscribe({
        next: (response: any) => {
          console.log('Registration Successful', response);
          localStorage.setItem('FmcToken', this.FmcToken);
          localStorage.setItem('token', response.response.token.accessToken);

          this.authService.login();

          Swal.fire({
            title: 'Account Created Successfully!',
            text: 'Your account has been created successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.router.navigate(['/home']);
          });
        },
        error: (error) => {
          console.error('Error registering', error);
          Swal.fire({
            title: 'Registration Failed',
            text: 'There was an error while registering your account.',
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
        }
      });
  }
}
