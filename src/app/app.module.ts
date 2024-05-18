import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MainComponent } from './pages/main/main.component';
//import { SignUpComponent } from './pages/sign-up/sign-up.component';
//import { LogInComponent } from './pages/log-in/log-in.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//import { CreateQueryComponent } from './pages/create-query/create-query.component';
//import { AllQueryComponent } from './pages/all-query/all-query.component';
//import { QueryComponent } from './pages/query/query.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    //MainComponent,
    //SignUpComponent,
    //LogInComponent,
    HeaderComponent,
    FooterComponent,
    //CreateQueryComponent,
    //AllQueryComponent,
    //QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
