import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})

export class ProductCardComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}

// export class ProductCardComponent {
//   products = [
//     { img: '/assets/products/product-img-01.jpg', title: 'After Dark Reflective Jacket', price: '£70' },
//     { img: '/assets/products/product-img-02.jpg', title: 'Gleem Reflective Joggers', price: '£35' },
//     { img: '/assets/products/product-img-03.jpg', title: 'Reflective Trim Jacket', price: '£50' },
//     { img: '/assets/products/product-img-04.jpg', title: 'Before Dawn Trainers', price: '£90' },
//     { img: '/assets/products/product-img-05.jpg', title: 'After Dark Trainers', price: '£90' },
//     { img: '/assets/products/product-img-06.jpg', title: 'Dawn Sunglasses', price: '£20' },
//     { img: '/assets/products/product-img-07.jpg', title: 'Dusk Sunglasses', price: '£20' },
//     { img: '/assets/products/product-img-08.jpg', title: 'All Bases Puffer Jacket', price: '£85' },
//     { img: '/assets/products/product-img-09.jpg', title: 'Reflective Trim Trousers', price: '£40' },
//     { img: '/assets/products/product-img-10.jpg', title: 'Stash Tech Bomber', price: '£45' },
//     { img: '/assets/products/product-img-11.jpg', title: 'Reveal Cargo Pants', price: '£40' },
//     { img: '/assets/products/product-img-12.jpg', title: 'Skirt Tech Trousers', price: '£40' },
//     { img: '/assets/products/product-img-13.jpg', title: 'All Bases Cargo Pants', price: '£35' },
//     { img: '/assets/products/product-img-14.jpg', title: 'Reveal Tech Wear Top', price: '£40' },
//     { img: '/assets/products/product-img-15.jpg', title: 'Impact Sling Bag', price: '£30' },
//     { img: '/assets/products/product-img-16.jpg', title: 'Before Dawn Cloak', price: '£40' },
//     { img: '/assets/products/product-img-17.jpg', title: 'Layers of Dusk Shirt', price: '£25' },
//     { img: '/assets/products/product-img-18.jpg', title: 'Tech Wear Cover Up', price: '£30' },
//     { img: '/assets/products/product-img-19.jpg', title: 'Zipped T Shirt', price: '£20' },
//     { img: '/assets/products/product-img-20.jpg', title: 'Impact Cargo Pants', price: '£40' },
//     { img: '/assets/products/product-img-21.jpg', title: 'Detail Cargo Pants', price: '£30' },
//     { img: '/assets/products/product-img-22.jpg', title: 'After Dark Gloves', price: '£15' },
//     { img: '/assets/products/product-img-23.jpg', title: 'Impact Tech Jersey', price: '£35' },
//     { img: '/assets/products/product-img-24.jpg', title: 'Swatches Trainers', price: '£100' },
//     { img: '/assets/products/product-img-25.jpg', title: 'Impact Trainers', price: '£100' },
//     { img: '/assets/products/product-img-26.jpg', title: 'Reflective Piped Leggings', price: '£25' },
//     { img: '/assets/products/product-img-27.jpg', title: 'Movement Scarf', price: '£10' },
//     { img: '/assets/products/product-img-28.jpg', title: 'Movement Joggers', price: '£25' },
//     { img: '/assets/products/product-img-29.jpg', title: 'After Dark Waistcoat', price: '£20' },
//     { img: '/assets/products/product-img-30.jpg', title: 'Runner Long Sleeve', price: '£15' },
//     { img: '/assets/products/product-img-31.jpg', title: 'Movement Light Jacket', price: '£25' },
//     { img: '/assets/products/product-img-32.jpg', title: 'Movement Slim Jacket', price: '£25' },
//     { img: '/assets/products/product-img-33.jpg', title: 'Detail Jersey', price: '£20' },
//     { img: '/assets/products/product-img-34.jpg', title: 'Survived Tech Jersey', price: '£20' },
//     { img: '/assets/products/product-img-35.jpg', title: 'Survived Tech Jacket', price: '£40' },
//     { img: '/assets/products/product-img-36.jpg', title: 'Thermal Leggings', price: '£20' },
//     { img: '/assets/products/product-img-37.jpg', title: 'Thermal Long Sleeve', price: '£20' },
//     { img: '/assets/products/product-img-38.jpg', title: 'Movement Simple Jacket', price: '£20' },
//     { img: '/assets/products/product-img-39.jpg', title: 'Movement Statement Coat', price: '£40' },
//     { img: '/assets/products/product-img-40.jpg', title: 'Sheen Sunglasses', price: '£20' },
//     { img: '/assets/products/product-img-41.jpg', title: 'Gleem Long Sleeve', price: '£15' },
//     { img: '/assets/products/product-img-42.jpg', title: 'Movement Waterproof Coat', price: '£40' },
//     { img: '/assets/products/product-img-43.jpg', title: 'Movement Running Jacket', price: '£30' },
//     { img: '/assets/products/product-img-44.jpg', title: 'Movement Piped Waterproof', price: '£30' },
//     { img: '/assets/products/product-img-45.jpg', title: 'Movement Puffer Jersey', price: '£20' },
//     { img: '/assets/products/product-img-46.jpg', title: 'Before Dawn Sunglasses', price: '£20' },
//     { img: '/assets/products/product-img-47.jpg', title: 'Reflective Long Sleeve', price: '£20' }
//   ];
// }
