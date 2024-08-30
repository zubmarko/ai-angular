import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerModalComponent } from './components/customers/create-customer-modal/create-customer-modal.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TreeComponent } from './components/tree/tree.component';
import { DemoMaterialModule } from './material-module';
import { DataService } from './services/data.service';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    // BaseChartDirective,
    LoginComponent,
    StatisticsComponent,
    CustomersComponent,
    HeaderComponent,
    CreateCustomerModalComponent,
    TreeComponent,
    ToggleComponent,
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
    BaseChartDirective,
    
    // Other modules (add more as needed)
  ],
  providers: [
    DataService, 
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
