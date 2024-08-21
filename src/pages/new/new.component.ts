import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ CommonModule, NgbDropdownModule, ProductCardComponent ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})

export class NewComponent implements OnInit {
  products: Product[] = [];
  selectedSort: string = '';
  selectedType: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    const category = 'new';

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
