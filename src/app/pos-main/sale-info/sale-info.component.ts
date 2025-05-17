import { Component, inject, Input, OnInit } from '@angular/core';
import { SaleSearchComponent } from "./sale-search/sale-search.component";
import { SaleListComponent } from "./sale-list/sale-list.component";
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduct, Product } from '../../../models/product.model';
import { QueueAction } from 'rxjs/internal/scheduler/QueueAction';
import { AmountHandlingService } from '../../services/amount-handling.service';

@Component({
    selector: 'app-sale-info',
    imports: [SaleSearchComponent, SaleListComponent, ReactiveFormsModule],
    templateUrl: './sale-info.component.html',
    styleUrl: './sale-info.component.css'
})
export class SaleInfoComponent {

    fb = inject(FormBuilder);
    ahs = inject(AmountHandlingService);
    @Input() saleItems!: FormArray;
    selectedItems: IProduct[] = [];

    createItemForm(product: IProduct) {
        return this.fb.group({
            productId: [product.id, Validators.required],
            quantity: [1, Validators.required],
            unitPrice: [product.sellingRate, Validators.required]
        });
    }

    onProductAdded(product: IProduct) {
        // console.log('OnProductAdded', product);
        const existing = this.selectedItems.find(item => item.id === product.id);
        if (!existing) {
            this.selectedItems.push({
                id: product.id,
                displayId: product.displayId,
                name: product.name,
                barcode: product.barcode,
                landingCost: product.landingCost,
                sellingRate: product.sellingRate,
                stockQuantity: 1,
                discount: product.discount
            });
            const index = this.selectedItems.length - 1;
            const itemForm = this.createItemForm(product);
            this.saleItems.push(itemForm);
            this.calculateAmounts();

        }
        else {
            const index = this.selectedItems.findIndex(item => item.id === product.id)
            this.selectedItems[index].stockQuantity++;
            this.changeSaleItemsQuantity(index);
            this.calculateAmounts();

        }
    }

    changeSaleItemsQuantity(index: number) {
        const newStockQty = this.selectedItems[index].stockQuantity;
        const formGroup = this.saleItems.at(index) as FormGroup;
        const quantityControl = formGroup.get('quantity');
        console.log(newStockQty);
        quantityControl?.setValue(newStockQty);
        this.calculateAmounts();

        this.display();
    }

    onProductRemove(event: { product: IProduct; index: number }) {
        console.log('productToRemove', event.product);
        this.selectedItems.splice(event.index, 1);
        this.saleItems.removeAt(event.index);
        this.calculateAmounts();

        this.display();
    }

    onQtyChange(index: number) {
        this.changeSaleItemsQuantity(index);
        this.calculateAmounts();

    }

    display() {
        console.log('selected Items', this.selectedItems.map(item => ({
            id: item.id,
            stockQuantity: item.stockQuantity,
            sellingRate: item.sellingRate,
            barcode: item.barcode,
            discount: item.discount,
            displayId: item.displayId,
            landingCost: item.landingCost,
            name: item.name,
        }))); console.log('saleitems', this.saleItems.value);
        this.calculateAmounts();
    }

    calculateAmounts() {
        const subtotal = this.selectedItems.reduce((sum, product) => sum + ((product.sellingRate) * product.stockQuantity), 0)
        const itemDiscount = this.selectedItems.reduce((sum, product) => sum + ((product.discount) * product.stockQuantity), 0)
        this.ahs.setAmounts(subtotal, itemDiscount);
    }
    reset(){
        // Clear selected items
        this.selectedItems = [];

        // Clear the saleItems FormArray
        while (this.saleItems.length !== 0) {
            this.saleItems.removeAt(0);
        }

        // Reset any amounts (if applicable)
        this.ahs.setAmounts(0, 0);
    }
}
