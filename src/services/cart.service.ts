import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() {
    this.loadCart();
  }

  private loadCart(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(product: Product, size: string): void {
    const existingItem = this.cart.find(
      (item) => item.product._id === product._id && item.size === size
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ product, size, quantity: 1 });
    }
    this.saveCart();
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  removeFromCart(productId: string, size: string): void {
    this.cart = this.cart.filter(
      (item) => item.product._id !== productId || item.size !== size
    );
    this.saveCart();
  }

  clearCart(): void {
    this.cart = [];
    localStorage.removeItem('cart');
  }
}
