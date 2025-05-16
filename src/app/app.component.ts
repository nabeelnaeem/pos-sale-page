import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosMainComponent } from "./pos-main/pos-main.component";
import { RecieptComponent } from "./pos-main/print/reciept/reciept.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PosMainComponent, RecieptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pos-sale-page';
}
