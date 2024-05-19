import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  
  email = new FormControl('');
  password = new FormControl('');
  loading: boolean = false;

  constructor(private router: Router, private location: Location,private authService: AuthService){

  }

  goBack(){
    this.location.back();
  }
  
  login(){
    this.loading = true;
    
    this.authService.login(this.email.value as string ,this.password.value as string).then(cred =>{
      console.log(cred);

    }).catch(error => {
      console.error(error);
    })
    ;

    this.loading = false;
  }

  
}
