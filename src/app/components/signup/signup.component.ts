import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], // Updated to include password length validation
      mobileNumber: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]], // Mobile number validation added
      role: ['', Validators.required] // Role field added with required validation
    });
  }

  get formControls() { return this.registerForm.controls; }

  handleRegister() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // Call your register service or handle registration logic here
    console.log(this.registerForm.value);
  }

  handleSignIn() {
    // Handle sign in navigation or logic here
    console.log('Sign in clicked');
  }
}