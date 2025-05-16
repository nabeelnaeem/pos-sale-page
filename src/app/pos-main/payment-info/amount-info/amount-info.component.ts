import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input, OnInit, signal } from '@angular/core';
import { AmountHandlingService } from '../../../services/amount-handling.service';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-amount-info',
    imports: [CurrencyPipe, FormsModule],
    templateUrl: './amount-info.component.html',
    styleUrl: './amount-info.component.css'
})
export class AmountInfoComponent {

    ahs = inject(AmountHandlingService);
    subtotal = computed(() => this.ahs.subtotalM());
    itemDiscount = computed(() => this.ahs.itemDiscountM());
    totalDiscount = computed(() => this.ahs.totalDiscount());
    cashierDiscount: number = 0;
    totalAmount = computed(() => this.ahs.totalAmount());

    setAmounts() {
        this.ahs.cashierDiscount.set(this.cashierDiscount);
        this.ahs.calculateTotal();
    }
}

