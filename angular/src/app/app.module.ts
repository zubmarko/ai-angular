import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
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
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { DemoMaterialModule } from './material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { CustomersComponent } from './components/customers/customers.component';
import { CreateCustomerModalComponent } from './components/customers/create-customer-modal/create-customer-modal.component';
import { TreeComponent } from './components/tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatisticsComponent,
    CustomersComponent,
    HeaderComponent,
    CreateCustomerModalComponent,
    TreeComponent,
    ToggleComponent,
    // Other components (add more as needed)
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,  // Required for Angular Material
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatExpansionModule,
    // MatMenuModule,
    // MatIconModule,
    // MatSlideToggleModule,
    // MatToolbarModule,
    AppRoutingModule,  // Routing module for handling routes
    // MatCardModule,
    DemoMaterialModule,
    // Other modules (add more as needed)
  ],
  providers: [DataService, { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
