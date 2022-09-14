import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CitiesTableComponent } from './components/cities-table/cities-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APIComponent } from './pages/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitiesTableComponent,
    NavbarComponent,
    APIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
