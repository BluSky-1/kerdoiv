import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'kerdoiv';
  page = '';
  loggedInUser?:firebase.default.User | null;
  localStorage = '';
  routes : Array<string> = [];

  constructor(private router: Router, private authService: AuthService,){
  }

  ngOnInit(){
    this.routes = this.router.config.map(conf => conf.path) as string[];
    
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {     //pipe használat
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    });

    this.authService.isUserLoggedIn().subscribe(user => {
      
      localStorage?.setItem('user',JSON.stringify(this.loggedInUser));
      this.loggedInUser = user;
    }, error => {
      console.error(error);
      localStorage?.setItem('user',JSON.stringify('null'));
    });
  }

  changePage(selectedPage: string){
    this.router.navigateByUrl(selectedPage)
  }

  onTogglesSidenav(sideNav: MatSidenav) {
    sideNav.toggle();
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
