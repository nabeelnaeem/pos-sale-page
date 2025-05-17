import { Component, effect, inject, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AmountInfoComponent } from "./amount-info/amount-info.component";
import { AmountHandlingService } from '../../services/amount-handling.service';
import { PaymentMethodsComponent } from "./payment-methods/payment-methods.component";

@Component({
    selector: 'app-payment-info',
    imports: [ReactiveFormsModule, AmountInfoComponent, PaymentMethodsComponent],
    templateUrl: './payment-info.component.html',
    styleUrl: './payment-info.component.css'
})
export class PaymentInfoComponent implements OnInit {
    @Input() discountControl!: FormControl;
    @Input() paymentsInputArray!: FormArray;

    ahs = inject(AmountHandlingService);

    // ✅ Run effect inside injection context (valid usage)
    private syncSignalToForm = effect(() => {
        const value = this.ahs.totalDiscount();
        if (this.discountControl?.value !== value) {
            this.discountControl?.setValue(value, { emitEvent: false });
        }
    });
    ngOnInit(): void {
        // ✅ Signal is updated when FormControl changes
        this.discountControl.valueChanges.subscribe((value) => {
            const parsed = Number(value);
            this.ahs.totalDiscount.set(!isNaN(parsed) ? parsed : 0);
        });
    }
    reset() {
        // Clear all payments
        while (this.paymentsInputArray.length > 0) {
            this.paymentsInputArray.removeAt(0);
        }

        // Reset discount value
        this.discountControl.setValue(0, { emitEvent: false });

        // Reset internal signal in the service
        this.ahs.totalDiscount.set(0);
    }
}
