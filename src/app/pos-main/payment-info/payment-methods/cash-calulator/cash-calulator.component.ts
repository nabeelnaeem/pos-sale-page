import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AmountHandlingService } from '../../../../services/amount-handling.service';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-cash-calulator',
    imports: [FormsModule, CurrencyPipe],
    templateUrl: './cash-calulator.component.html',
    styleUrl: './cash-calulator.component.css'
})
export class CashCalulatorComponent {

    ahs = inject(AmountHandlingService);
    totalBill = computed(() => this.ahs.totalAmount());
    cashPaid = signal(0);
    cashReturned: number = 0;

    constructor() {
        effect(() => {
            this.calculateChange();
        });
    }

    calculateChange() {
        this.cashReturned = this.cashPaid() - this.totalBill();
    }
    setCashPaid(value: number) {
        this.cashPaid.set(value);
    }

}
