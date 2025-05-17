import { Component } from '@angular/core';
import {AboutDevComponent} from './about-dev/about-dev.component';

@Component({
    selector: 'app-top-info',
    imports: [
        AboutDevComponent
    ],
    templateUrl: './top-info.component.html',
    styleUrl: './top-info.component.css'
})
export class TopInfoComponent {
    datetimeNow = new Date();
    showDevInfo = false;

    showInfo(){
        this.showDevInfo = true;
    }
    hideInfo(){
        this.showDevInfo = false;
    }
}
