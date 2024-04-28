import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      otp: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  handleLogin() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const {email, password, otp}= this.loginForm.value;

    this.userService.resetPasswordApi({
      email : email,
      newPassword : password,
      otp : otp
    }).subscribe( results =>{console.log(results)},error=>{console.log(error)});

    // Handle login logic here, for example, navigate to dashboard
    console.log('Password reset successful', this.loginForm.value);
    
    this.router.navigate(['']);
  }  
  

}
