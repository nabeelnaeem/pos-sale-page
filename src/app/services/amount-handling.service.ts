import { Injectable, signal, computed } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AmountHandlingService {
    subtotalM = signal<number>(0);
    itemDiscountM = signal<number>(0);
    totalDiscount = signal<number>(0);
    cashierDiscount = signal<number>(0);
    totalAmount = signal<number>(0);

    setAmounts(subtotal: number, itemDiscount: number) {
        this.subtotalM.set(subtotal);
        this.itemDiscountM.set(itemDiscount);
        this.calculateTotal();
        console.log('Subtotal: ', this.subtotalM());
        console.log('Discount: ', this.itemDiscountM());
    }

    calculateTotalDiscount() {
        this.totalDiscount.set(this.itemDiscountM() + this.cashierDiscount());
    }

    calculateTotal() {
        this.calculateTotalDiscount();
        this.totalAmount.set(this.subtotalM() - this.totalDiscount());
    }

}
