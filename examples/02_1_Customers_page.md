# Simple Cusomers Page (3 components)

1. [source_of_page] migrate to angular and use material UI
2. No directive found with exportAs 'ngForm'.
3. add typescript and fix customers Property 'name' does not exist on type 'never'.
4. No directive found with exportAs 'ngForm'. src
5. Property 'city' comes from an index signature, so it must be accessed with ['city'].
6. correct code `<h3 mat-dialog-title>Create New Customer</h3> <form #customerForm="ngForm" (ngSubmit)="onSubmit(customerForm)"> <mat-form-field appearance="fill"> <mat-label>Name</mat-label> <input matInput [(ngModel)]="newCustomer.name" name="name" required /> <mat-error *ngIf="customerForm.form.controls['name']?.invalid && submitted">Name is required.</mat-error> </mat-form-field> <mat-form-field appearance="fill"> <mat-label>Age</mat-label> <input matInput type="number" [(ngModel)]="newCustomer.age" name="age" required min="1" /> <mat-error *ngIf="customerForm.form.controls['age']?.invalid && submitted">Age is required and must be a positive number.</mat-error> </mat-form-field> <mat-form-field appearance="fill"> <mat-label>City</mat-label> <mat-select [(ngModel)]="newCustomer.city" name="city" required> <mat-option *ngFor="let city of cities" [value]="city">{{ city }}</mat-option> </mat-select> <mat-error *ngIf="customerForm.form.controls['city']?.invalid && submitted">City is required.</mat-error> </mat-form-field> <div mat-dialog-actions> <button mat-button type="button" (click)="onCancel()">Cancel</button> <button mat-raised-button color="primary" type="submit">Submit</button> </div> </form> please make inputs full width size`
7. [source_tree_component] I would also want to migrate tree component to material ui and use it on customers page
8. check tree component nested levels
9. display all my prompts but avoid messages with word "prompts" format as number list for md file markup return markup md
