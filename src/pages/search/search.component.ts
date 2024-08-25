import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-products-search',
  standalone: true,
  imports: [ CommonModule, NgbDropdownModule, ProductCardComponent ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  products: Product[] = [];
  selectedSort: string = '';
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['search'] || '';
      this.selectedSort = params['sort'] || '';
      if (this.searchTerm) {
        this.fetchProducts();
      } else {
        this.products = [];
      }
    });
  }

  fetchProducts(): void {
    if (this.searchTerm) {
      this.productService.getProducts(this.searchTerm, this.selectedSort, '').subscribe(
        (data: Product[]) => {
          this.products = data;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
    } else {
      this.products = [];
    }
  }

  sortProducts(order: string): void {
    this.selectedSort = order;
    this.fetchProducts();
  }

  onSearch(event: Event, searchTerm: string): void {
    event.preventDefault();
    this.searchTerm = searchTerm.trim();
  
    if (this.searchTerm) {
      this.router.navigate(['/products-search'], { 
        queryParams: { 
          search: this.searchTerm, 
          sort: this.selectedSort
        } 
      });
      this.ngZone.run(() => {
        this.fetchProducts();
      });
    } else {
      this.products = [];
    }
  }
}
