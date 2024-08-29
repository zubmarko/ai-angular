import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ToggleComponent } from './components/toggle/toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatisticsComponent,
    HeaderComponent,
    ToggleComponent,
    // Other components (add more as needed)
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,  // Required for Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    AppRoutingModule,  // Routing module for handling routes
    // Other modules (add more as needed)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
