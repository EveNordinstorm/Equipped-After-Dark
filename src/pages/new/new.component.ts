import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
  selectedCategory: string = 'new';
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedCategory = params['category'] || this.selectedCategory;
      this.searchTerm = params['search'] || '';
      this.fetchProducts();
    });
  }

  fetchProducts(): void {
    this.productService.getProducts(this.selectedCategory, this.selectedSort, this.searchTerm).subscribe(
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

  onSearch(event: Event, searchTerm: string): void {
    event.preventDefault();
    this.searchTerm = searchTerm.trim();
    this.router.navigate(['/new'], { 
      queryParams: { 
        category: this.selectedCategory, 
        search: this.searchTerm 
      } 
    });
    this.fetchProducts();
  }
}
