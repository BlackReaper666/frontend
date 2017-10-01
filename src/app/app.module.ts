import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { routes } from './app.router'
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { PageNotFoundComponent } from './pages/others/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { Page2Component } from './pages/page2/page2.component';



@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    PageNotFoundComponent,
    LoginComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
