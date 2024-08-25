import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-expanded',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './product-expanded.component.html',
  styleUrl: './product-expanded.component.scss'
})
export class ProductExpandedComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private wishlistService: WishlistService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe(
        (data: Product) => {
          this.product = data;
          console.log('Product data:', this.product);
          console.log('Stock data:', this.product.stockLevels);
        }
      );
    }
  }

  toggleWishlist(product: Product): void {
    if (this.isInWishlist(product._id)) {
      this.wishlistService.removeFromWishlist(product._id);
    } else {
      this.wishlistService.addToWishlist(product);
    }
  }

  isInWishlist(productId: string): boolean {
    return this.wishlistService.isInWishlist(productId);
  }

  addToCart(selectedSize: string): void {
    if (this.product) {
      this.cartService.addToCart(this.product, selectedSize);
      console.log(`Added product: ${this.product.title}, size: ${selectedSize} to cart`);
      alert(`Size ${selectedSize} added to cart.`);
    }
  }
}
