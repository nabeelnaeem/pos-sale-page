import {Injectable} from '@angular/core';
import {Customer} from '../../models/customer.model';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    customers: Customer[] = Customer.customerList;
    constructor() {
    }
    getCustomerName(id: string): string {
        const customerFound : Customer = this.customers.find(customer => customer.id === id)!;
        return customerFound.name;
    }
}
