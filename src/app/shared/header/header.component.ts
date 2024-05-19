import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();


  constructor(private authService:AuthService,private router:Router){

  }

  logout() {
    this.authService.logout().then(() => {
      console.log("logged out");
    }).catch(error =>{
      console.error(error);
    });
    this.router.navigateByUrl("\main");
  }
}
