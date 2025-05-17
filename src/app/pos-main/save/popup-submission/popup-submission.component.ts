import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { getCurrentInjector } from '@angular/core/primitives/di';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { ProductService } from '../../../services/product.service';

@Component({
    selector: 'app-popup-submission',
    imports: [CurrencyPipe],
    templateUrl: './popup-submission.component.html',
    styleUrl: './popup-submission.component.css'
})
export class PopupSubmissionComponent {
    custServ = inject(CustomerService);
    prodServ = inject(ProductService);
    logFormData() {
        console.log(this.mainForm.value);
    }
    @Output() close = new EventEmitter<void>();
    @Output() print = new EventEmitter<void>();
    @Input() mainForm!: FormGroup;

    customerName(id: string): string {
        return this.custServ.getCustomerName(id);
    }
    productName(id: string): string {
        return this.prodServ.getProductName(id);
    }
    get discount() {
        return this.mainForm.get('discount')?.value;
    }
    get saleItemsArray() {
        return this.mainForm.get('saleItems') as FormArray;
    }
    get paymentsArray() {
        return this.mainForm.get('payments') as FormArray;
    }
    get totalAmount() {
        return this.saleItemsArray.controls.reduce((sum, control) => {
            const unitPrice = control.get('unitPrice')?.value || 0;
            return sum + unitPrice;
        }, 0)
    }
}
