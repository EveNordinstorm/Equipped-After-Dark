import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products-men',
  standalone: true,
  imports: [ CommonModule, NgbDropdownModule, ProductCardComponent ],
  templateUrl: './products-men.component.html',
  styleUrl: './products-men.component.scss'
})

export class ProductsMenComponent implements OnInit {
  products: Product[] = [];
  selectedSort: string = '';
  selectedType: string = '';
  selectedCategory: string = 'men';
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedType = params['type'] || '';
      this.selectedCategory = params['category'] || this.selectedCategory;
      this.searchTerm = params['search'] || '';
      this.fetchProducts();
    });
  }

  fetchProducts(): void {
    this.productService.getProducts(this.selectedCategory, this.selectedSort, this.selectedType, this.searchTerm).subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  sortProducts(order: string): void {
    this.selectedSort = order;
    this.fetchProducts();
  }

  onTypeFilterChange(category: string, type: string): void {
    this.router.navigate(['/products-men'], { queryParams: { category: category, type: type } });
  }

  onSearch(event: Event, searchTerm: string): void {
    event.preventDefault();
    this.searchTerm = searchTerm.trim();
    this.router.navigate(['/products-men'], { 
      queryParams: { 
        category: this.selectedCategory, 
        type: this.selectedType, 
        search: this.searchTerm 
      } 
    });
    this.fetchProducts();
  }
}
