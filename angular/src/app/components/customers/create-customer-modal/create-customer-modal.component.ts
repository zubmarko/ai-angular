import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

// Define an interface for the customer object
interface Customer {
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-create-customer-modal',
  templateUrl: './create-customer-modal.component.html',
  // styleUrls: ['./create-customer-modal.component.css']
})
export class CreateCustomerModalComponent {
  newCustomer: Customer = { name: '', age: 0, city: '' };
  cities: string[] = ['Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Donetsk', 'Zaporizhzhia', 'Lviv', 'Kryvyi Rih', 'Mykolaiv', 'Mariupol'];
  submitted = false;

  constructor(public dialogRef: MatDialogRef<CreateCustomerModalComponent>) {}

  onSubmit(form: any): void {
    this.submitted = true;
    if (form.valid) {
      this.dialogRef.close(this.newCustomer);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
