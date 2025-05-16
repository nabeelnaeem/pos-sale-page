import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct, Product } from '../../../../models/product.model';
import { mapToResolve } from '@angular/router';

@Component({
    selector: 'app-sale-search',
    imports: [FormsModule],
    templateUrl: './sale-search.component.html',
    styleUrl: './sale-search.component.css'
})
export class SaleSearchComponent {
    @Output() productSelected = new EventEmitter<IProduct>();

    searchText: string = '';
    productList = Product.productList;
    matchedProduct: IProduct[] = [];
    placeholderText: string = 'Enter Products Name, Barcode, SKU ...';
    searching() {
        if (this.searchText.length >= 0) {
            this.matchedProduct = this.productList.filter(item =>
                item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                item.barcode.toLowerCase().includes(this.searchText.toLowerCase())
            );
        }
        else {
            this.clearSearch();
        }
    }
    onProductSelect(product: IProduct) {
        this.productSelected.emit(product);
        this.clearSearch();
    }
    clearSearch() {
        this.matchedProduct = [];
        this.searchText = ''
    }
}
