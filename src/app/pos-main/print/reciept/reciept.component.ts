import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-reciept',
    imports: [DatePipe, CurrencyPipe],
    templateUrl: './reciept.component.html',
    styleUrl: './reciept.component.css'
})
export class RecieptComponent {
    sale = {
        date: new Date(),
        id: '123456',
        items: [
            { name: 'Product A', quantity: 2, price: 4.5 },
            { name: 'Product B', quantity: 1, price: 2.0 },
            { name: 'Product C', quantity: 3, price: 3.75 }
        ],
        get total() {
            return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        }
    };

    printReceipt() {
        const printContent = document.getElementById('print-section')!.innerHTML;
        const popupWin = window.open('', '_blank', 'width=300,height=600');

        if (popupWin) {
            popupWin.document.open();
            popupWin.document.write(`
        <html>
          <head>
            <title>Print Receipt</title>
            <style>
              ${document.querySelector('style')?.innerText || ''}
            </style>
          </head>
          <body onload="window.print(); window.close();">
            ${printContent}
          </body>
        </html>
      `);
            popupWin.document.close();
        }
    }
}
