import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';
import { error } from 'console';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
  });

  constructor(private location: Location,private authService:AuthService, private userService: UserService){

  }

  goBack(){
    this.location.back();
  }

  onSubmit(){
    if(this.signUpForm.get('password')?.value === this.signUpForm.get('repassword')?.value){
    this.authService.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then(cred =>{

      const user: User = {
        id: cred.user?.uid as string,
        email: cred.user?.email as string,
        username: this.signUpForm.get('username')?.value as string,
      }

      console.log(cred);

      this.userService.create(user).then(_=> {
        console.log('User created')
      }).catch(error => {
        console.error(error);
    });

    }).catch(error => {
      console.error(error);
    });
  } else {
    console.error("passwords don't match")
  }
  }
}
