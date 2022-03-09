import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { CityService } from './city.service';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
