import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-men',
  standalone: true,
  imports: [ NgbDropdownModule ],
  templateUrl: './products-men.component.html',
  styleUrl: './products-men.component.scss'
})

export class ProductsMenComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data.filter(product => product.category === 'men');
      }
    );
  }
}
