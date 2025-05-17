import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-about-dev',
  imports: [],
  templateUrl: './about-dev.component.html',
  styleUrl: './about-dev.component.css'
})
export class AboutDevComponent {
    @Output() close = new EventEmitter();
}
