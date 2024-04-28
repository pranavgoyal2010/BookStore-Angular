import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;  

  constructor(private userService:UserService, private formBuilder: FormBuilder, private  router: Router) { }

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

  get f() { return this.registerForm.controls; }

  handleRegister() {
    this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      const {firstName, lastName, email, password, mobileNumber, role}= this.registerForm.value;

      this.userService.registerApi({
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password,
        mobileNo: mobileNumber,
        role: role
      }).subscribe( results =>{console.log(results)},error=>{console.log(error)});

      // display form values on success
      console.log('Registration done!');
      console.log(this.registerForm.value);   
      this.handleSignIn();
  }

  handleSignIn() {
    // Handle sign in navigation or logic here
    this.router.navigate(['']);
  }
}