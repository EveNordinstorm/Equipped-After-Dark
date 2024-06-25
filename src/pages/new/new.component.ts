import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ NgbDropdownModule, ProductCardComponent ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {

}
