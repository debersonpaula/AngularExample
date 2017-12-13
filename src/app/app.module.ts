import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

import { HomeComponent } from './views/home';
import { LoginComponent } from './views/login';
import { RegisterComponent } from './views/register';
import { MainService } from './services/main.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
