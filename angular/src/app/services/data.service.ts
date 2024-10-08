import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getStatistics(): Observable<any> {
    return this.http.get('/assets/data/statistics.json');
  };
  getCustomers(): Observable<any> {
    return this.http.get('/assets/data/customers.json');
  }
}
