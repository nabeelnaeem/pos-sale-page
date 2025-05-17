import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PopupSubmissionComponent} from "./popup-submission/popup-submission.component";
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-save',
    imports: [PopupSubmissionComponent],
    templateUrl: './save.component.html',
    styleUrl: './save.component.css'
})
export class SaveComponent {
    @Output() close = new EventEmitter<void>();
    @Output() print = new EventEmitter<void>();
    @Input() mainForm!: FormGroup;

    closeModal() {
        this.close.emit();
    }
}
