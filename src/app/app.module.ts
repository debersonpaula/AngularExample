import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AppRouterModule } from './/app-router.module';
import { AppDataService } from './app-data.service';
import { AppLogService } from './app-log.service';
import { LogviewComponent } from './logview/logview.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    LogviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule,
  ],
  providers: [AppDataService, AppLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
