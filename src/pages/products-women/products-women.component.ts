import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products-women',
  standalone: true,
  imports: [ CommonModule, NgbDropdownModule, ProductCardComponent ],
  templateUrl: './products-women.component.html',
  styleUrl: './products-women.component.scss'
})

export class ProductsWomenComponent implements OnInit {
  products: Product[] = [];
  selectedSort: string = '';
  selectedType: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    const category = 'women';

    this.productService.getProducts(category, this.selectedSort, this.selectedType).subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  onSortChange(sortOption: string): void {
    this.selectedSort = sortOption;
    this.fetchProducts();
  }

  onTypeFilterChange(type: string): void {
    this.selectedType = type;
    this.fetchProducts();
  }
}
