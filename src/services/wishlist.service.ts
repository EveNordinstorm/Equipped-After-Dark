import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private storageKey = 'wishlist';

  constructor() {
    this.loadWishlist();
  }

  private loadWishlist(): void {
    const storedWishlist = localStorage.getItem(this.storageKey);
    if (storedWishlist) {
      this.wishlist = JSON.parse(storedWishlist);
    }
  }

  private saveWishlist(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.wishlist));
  }

  private wishlist: Product[] = [];

  addToWishlist(product: Product): void {
    if (!this.isInWishlist(product._id)) {
      this.wishlist.push(product);
      this.saveWishlist();
    }
  }

  getWishlist(): Product[] {
    return this.wishlist;
  }

  removeFromWishlist(productId: string): void {
    this.wishlist = this.wishlist.filter(item => item._id !== productId);
    this.saveWishlist();
  }

  isInWishlist(productId: string): boolean {
    return this.wishlist.some(item => item._id === productId);
  }
}
