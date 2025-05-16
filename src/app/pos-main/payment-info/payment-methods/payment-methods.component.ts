import { Component, computed, effect, inject, Input, NgModule, OnInit, signal } from '@angular/core';
import { IPaymentMethod, PaymentMethod } from '../../../../models/payment.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { FormArray, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { AmountHandlingService } from '../../../services/amount-handling.service';
import { CashCalulatorComponent } from "./cash-calulator/cash-calulator.component";

@Component({
    selector: 'app-payment-methods',
    imports: [FormsModule, CurrencyPipe, CashCalulatorComponent],
    templateUrl: './payment-methods.component.html',
    styleUrl: './payment-methods.component.css'
})
export class PaymentMethodsComponent implements OnInit {
    @Input() paymentsInputArray!: FormArray;
    ahs = inject(AmountHandlingService);
    totalBill = computed(() => this.ahs.totalAmount());
    addedAmount = signal<number>(this.totalBill()); // Make it a signal if you want reactivity
    paymentMethods = PaymentMethod.paymentMethods;
    addedPaymentsArray: any[] = [];
    selectedPaymentMethod!: IPaymentMethod;
    totalPaidAmount: number = 0;
    constructor() {
        effect(() => {
            // Automatically runs whenever totalBill() changes
            this.addedAmount.set(this.totalBill());
            this.addPayment();
            console.log('inside effect');
        });
    }
    ngOnInit(): void {
        this.selectedPaymentMethod = this.paymentMethods.find(pm => pm.name === 'Cash')!;
        this.addedPaymentsArray = [{
            amount: 0,
            paymentMethod: this.selectedPaymentMethod.name,
        }];
    }
    //This method with only add a single payment object to array
    addPayment() {
        this.addedPaymentsArray[0].amount = this.addedAmount();
        this.addedPaymentsArray[0].paymentMethod = this.selectedPaymentMethod.name;
        console.log((this.addedPaymentsArray.length));
        const item = this.createItemForm(this.addedPaymentsArray[0]);
        if (this.paymentsInputArray.length == 0) {
            this.paymentsInputArray.push(item);
        }
        else {
            this.paymentsInputArray.at(0).setValue(item.value);
        }
        console.log('FormArray', this.paymentsInputArray.value);
        console.log('Array', this.addedPaymentsArray);

    }

    createItemForm(payment: { amount: number, paymentMethod: string }) {
        return new FormGroup({
            amount: new FormControl(payment.amount),
            paymentMethod: new FormGroup({
                id: new FormControl(payment.paymentMethod)
            })
        });
    }
    //The below methods are for multiple split payments which are under construction
    // addPayment() {
    //     const paymentObj = {
    //         amount: this.addedAmount(),
    //         paymentMethod: this.selectedPaymentMethod.name
    //     }
    //     const existingPaymentIndex = this.addedPaymentsArray.findIndex(pm => pm.paymentMethod === this.selectedPaymentMethod)
    //     if (existingPaymentIndex >= 0) {
    //         console.log('index: ', existingPaymentIndex);
    //         this.addedPaymentsArray[existingPaymentIndex].amount += this.addedAmount();
    //     }
    //     else {
    //         this.addedPaymentsArray.push(paymentObj);
    //     }

    //     this.addedAmount.set(this.totalBill() - paymentObj.amount);
    //     console.log(paymentObj.amount);
    //     console.log(this.addedAmount());
    //     this.calculateTotal();
    // }
    // removePayment(index: number) {
    //     this.addedPaymentsArray.splice(index, 1);
    //     this.calculateTotal();
    // }
    // calculateTotal() {
    //     this.totalPaidAmount = this.addedPaymentsArray.reduce((sum, payment) => {
    //         return sum + payment.amount;
    //     }, 0);
    // }
}
