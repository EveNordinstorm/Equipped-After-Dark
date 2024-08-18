import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-women',
  standalone: true,
  imports: [ NgbDropdownModule ],
  templateUrl: './products-women.component.html',
  styleUrl: './products-women.component.scss'
})

export class ProductsWomenComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data.filter(product => product.category === 'women');
      }
    );
  }
}
