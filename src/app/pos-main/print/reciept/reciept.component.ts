import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { PopupSubmissionComponent } from '../../save/popup-submission/popup-submission.component';
import { FormArray, FormGroup } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { ProductService } from '../../../services/product.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
    selector: 'app-reciept',
    imports: [DatePipe, CurrencyPipe],
    templateUrl: './reciept.component.html',
    styleUrl: './reciept.component.css'
})
export class RecieptComponent {


    custServ = inject(CustomerService);
    prodServ = inject(ProductService);
    @Output() close = new EventEmitter<void>();
    @Input() mainForm!: FormGroup;
    @Input() dateTime!: Date;
    customerName(id: string): string {
        return this.custServ.getCustomerName(id);
    }

    productName(id: string): string {
        return this.prodServ.getProductName(id);
    }

    get discount() {
        return this.mainForm.get('discount')?.value;
    }

    get saleItemsArray() {
        return this.mainForm.get('saleItems') as FormArray;
    }

    get paymentsArray() {
        return this.mainForm.get('payments') as FormArray;
    }

    get totalAmount() {
        return this.saleItemsArray.controls.reduce((sum, control) => {
            const unitPrice = control.get('unitPrice')?.value || 0;
            return sum + unitPrice;
        }, 0)
    }
    generatePDF() {
        const receiptElement = document.getElementById('print-section');
        if (!receiptElement) return;

        const scale = 2;
        html2canvas(receiptElement, { scale }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            const pdfWidth = 80; // mm width of thermal receipt
            const pxPerMm = (96 * scale) / 25.4; // pixels per mm adjusted for scale

            // Calculate height in mm to keep aspect ratio
            const imgHeight = canvas.height / pxPerMm * (pdfWidth / (canvas.width / pxPerMm));

            // Simplify:
            // const imgHeight = (canvas.height * pdfWidth) / canvas.width / pxPerMm;

            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [pdfWidth, imgHeight],
            });

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);
            const now = new Date();
            const formattedDateTime = now.toISOString().replace(/[:.]/g, '-'); // "2025-05-16T12-30-45-123Z"
            pdf.save('receipt' + formattedDateTime + '.pdf');
        });
    }

    protected readonly Date = Date;
}
