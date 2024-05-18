import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  
  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private location: Location){

  }

  goBack(){
    this.location.back();
  }
  
  login(){
    if(this.email.value === 'test@gmail.com' && this.password.value === '123') {
      console.log('Successful login');
      this.goBack();
      //this.router.navigateByUrl('/main');
    } else {
      console.error('Unsuccessful login');
    }
  }
}
