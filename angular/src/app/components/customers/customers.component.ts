import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import { CreateCustomerModalComponent } from './create-customer-modal/create-customer-modal.component';

interface Customer {
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  title = 'Customers';
  customers: Customer[] = [];
  newlyAddedCustomer: Customer | null = null;
  categories = [
    {
      id: 1,
      title: 'Operating Systems',
      children: [
        {
          id: 2,
          title: 'Windows',
          children: [
            { id: 3, title: 'Windows 10' },
            { id: 4, title: 'Windows 7' }
          ]
        },
        {
          id: 5,
          title: 'Linux',
          children: [
            { id: 6, title: 'Ubuntu' },
            { id: 7, title: 'Fedora' }
          ]
        }
      ]
    },
    {
      id: 8,
      title: 'Development Tools',
      children: [
        {
          id: 9,
          title: 'IDEs',
          children: [
            { id: 10, title: 'Visual Studio' },
            { id: 11, title: 'IntelliJ IDEA' }
          ]
        },
        {
          id: 12,
          title: 'Version Control',
          children: [
            { id: 13, title: 'Git' },
            { id: 14, title: 'Subversion' }
          ]
        }
      ]
    }
  ];

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe(
      (data: Customer[]) => this.customers = data,
      (error) => console.error('Error fetching customers data:', error)
    );
  }

  openCreateCustomerModal(): void {
    const dialogRef = this.dialog.open(CreateCustomerModalComponent);

    dialogRef.afterClosed().subscribe((result: Customer | undefined) => {
      if (result) {
        this.customers = [result, ...this.customers];
        this.newlyAddedCustomer = result;
      }
    });
  }
}
