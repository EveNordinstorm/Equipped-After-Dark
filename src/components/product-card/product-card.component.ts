import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})

export class ProductCardComponent {
  @Input() product!: Product;
  @Input() size?: string;
  @Input() quantity?: number;

  constructor(private wishlistService: WishlistService) {}

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
}
