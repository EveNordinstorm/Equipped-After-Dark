import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgZone } from '@angular/core';

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
  selectedCategory: string = 'women';
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
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
    this.productService.getProducts(this.selectedCategory, this.selectedSort, this.selectedType).subscribe(
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
    this.router.navigate(['/products-women'], { queryParams: { category: category, type: type } });
  }
  

  onSearch(event: Event, searchTerm: string): void {
    event.preventDefault();
    this.searchTerm = searchTerm.trim();

    console.log('Search Term:', this.searchTerm);

    this.router.navigate(['/products-women'], { 
      queryParams: { 
        category: this.selectedCategory, 
        type: this.selectedType, 
        search: this.searchTerm 
      } 
    });
    this.ngZone.run(() => {
      this.fetchProducts();
    });
  }
}
