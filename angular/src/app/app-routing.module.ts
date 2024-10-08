import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AuthGuard } from './services/auth.guard';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'statistics', component: StatisticsComponent, 
  data: { title: 'Statistics' }  ,
  canActivate: [AuthGuard] 
},
  { path: 'customers', component: CustomersComponent,
  data: { title: 'Customers' },
  canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), CommonModule],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]  // Use hash-based routing
})
export class AppRoutingModule { }
