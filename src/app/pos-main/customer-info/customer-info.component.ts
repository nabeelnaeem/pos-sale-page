import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Customer } from '../../../models/customer.model';
@Component({
    selector: 'app-customer-info',
    imports: [ReactiveFormsModule, NgSelectModule],
    templateUrl: './customer-info.component.html',
    styleUrl: './customer-info.component.css'
})
export class CustomerInfoComponent implements OnInit {

    @Input() customerIDControl!: FormControl;
    allCustomers = Customer.customerList;

    ngOnInit(): void {
        const counterSale = this.allCustomers.find(customer => customer.name.toLocaleLowerCase() === 'Counter Sale'.toLocaleLowerCase())
        if (counterSale) {
            this.customerIDControl.setValue(counterSale.id);
        }
    }
}
