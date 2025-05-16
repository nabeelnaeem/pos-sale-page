import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormsModule } from '@angular/forms';
import { IProduct, Product } from '../../../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-sale-list',
    imports: [CurrencyPipe, FormsModule],
    templateUrl: './sale-list.component.html',
    styleUrl: './sale-list.component.css'
})
export class SaleListComponent {

    @Input() items: IProduct[] = [];
    @Output() productToRemove = new EventEmitter<{ product: IProduct, index: number }>();
    @Output() qtyChangedEvent = new EventEmitter<number>();

    onProductRemove(product: IProduct, index: number) {
        this.productToRemove.emit({ product, index });
    }
    qtyChange(index: number) {
        this.qtyChangedEvent.emit(index);
    }
}
