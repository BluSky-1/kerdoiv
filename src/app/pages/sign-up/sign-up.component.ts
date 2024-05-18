import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
  });

  constructor(private location: Location){

  }

  goBack(){
    this.location.back();
  }

  onSubmit(){
    this.signUpForm.value;    

  }
}
