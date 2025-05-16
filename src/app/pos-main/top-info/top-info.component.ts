import { Component } from '@angular/core';

@Component({
    selector: 'app-top-info',
    imports: [],
    templateUrl: './top-info.component.html',
    styleUrl: './top-info.component.css'
})
export class TopInfoComponent {
    datetimeNow = new Date();
}
