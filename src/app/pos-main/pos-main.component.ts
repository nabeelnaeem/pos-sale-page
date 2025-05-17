import {Component, EventEmitter, inject, Output, ViewChild,} from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule, ValidationErrors,
    Validators
} from '@angular/forms';
import {PaymentInfoComponent} from "./payment-info/payment-info.component";
import {CustomerInfoComponent} from "./customer-info/customer-info.component";
import {SaleInfoComponent} from "./sale-info/sale-info.component";
import {TopInfoComponent} from "./top-info/top-info.component";
import {SaveComponent} from "./save/save.component";
import {NgIf} from '@angular/common';
import {RecieptComponent} from './print/reciept/reciept.component';

function atLeastOneItem(control: AbstractControl): ValidationErrors | null {
    const formArray = control as FormArray;
    return formArray && formArray.length > 0 ? null : {required: true};
}

@Component({
    selector: 'app-pos-main',
    imports: [ReactiveFormsModule, PaymentInfoComponent, NgIf, CustomerInfoComponent, SaleInfoComponent, TopInfoComponent, SaveComponent, RecieptComponent],
    templateUrl: './pos-main.component.html',
    styleUrl: './pos-main.component.css'
})

export class PosMainComponent {
    @ViewChild(SaleInfoComponent) saleInfoComponent!: SaleInfoComponent;
    @ViewChild(PaymentInfoComponent) paymentInfoComponent!: PaymentInfoComponent;
    @ViewChild(CustomerInfoComponent) customerInfoComponent!: CustomerInfoComponent;
    showSave: boolean = false;
    showPrint: boolean = false;
    dateTime: Date = new Date();
    fb = inject(FormBuilder);
    mainSaleForm = this.fb.group({
        saleItems: this.fb.array([], atLeastOneItem),//saleItemsArray
        payments: this.fb.array([], atLeastOneItem),//paymentsArray
        discount: [0, [Validators.required]],
        customerId: [null, Validators.required]
    })//mainSaleForm Group


    get mainSaleFormGroup(): FormGroup {
        return this.mainSaleForm as FormGroup;
    }

    get saleItemsArray() {
        return this.mainSaleForm.get('saleItems') as FormArray;
    }

    get paymentsArray() {
        return this.mainSaleForm.get('payments') as FormArray;
    }

    get discountControl() {
        return this.mainSaleForm.get('discount') as FormControl;
    }

    get customerIdControl() {
        return this.mainSaleForm.get('customerId') as FormControl;
    }

    onSubmit() {
        console.log(this.mainSaleForm.get('discount')?.value);
        console.log(this.mainSaleForm.get('customerId')?.value);
        console.log(this.mainSaleForm.get('saleItems')?.value);
        console.log(this.mainSaleForm.value);
        this.dateTime = new Date();
    }

    printServices() {
        this.showPrint = true;
        this.showSave = false;
    }

    closePopup() {
        this.showPrint = false;
        this.showSave = false;

        // Clear FormArrays
        this.saleItemsArray.clear();
        this.paymentsArray.clear();

        // Reset form with default values
        this.mainSaleForm.reset({
            discount: 0,
            customerId: null,
            saleItems: [],
            payments: []
        });
        // Optionally reset dateTime if needed
        this.dateTime = new Date();
        this.customerInfoComponent.default();
        this.saleInfoComponent.reset();
        this.paymentInfoComponent.reset();
    }
}
