import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  forgetPasswordForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      // password: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.forgetPasswordForm.controls; }

  handleForgetPassword() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.forgetPasswordForm.invalid) {
      return;
    }
    const {email}= this.forgetPasswordForm.value;

    this.userService.forgetPasswordApi({
      email : email      
    }).subscribe( results =>{console.log(results)},error=>{console.log(error)});

    // Handle login logic here, for example, navigate to dashboard
    console.log('Email sent successfully', this.forgetPasswordForm.value);
    //this.router.navigate(['/dashboard/books']);
  }

  

}
