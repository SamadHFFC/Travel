import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cp-login',
  templateUrl: './cp-login.component.html',
  styleUrls: ['./cp-login.component.css']
})
export class CpLoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
 // convenience getter for easy access to form fields
 get f() { return this.loginForm.controls; }

 onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.loginForm.invalid) {
         return;
     }

     alert('Login Successfully done!!!');
      this.router.navigate(['cpadmin']);

     return false
     
 
 }





}
