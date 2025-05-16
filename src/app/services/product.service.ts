import { Injectable } from '@angular/core';
import {Customer} from '../../models/customer.model';
import {IProduct, Product} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    products: IProduct[] = Product.productList;
    constructor() {
    }
    getProductName(id: string): string {
        const productFound : IProduct = this.products.find(product => product.id === id)!;
        return productFound.name;
    }
}
