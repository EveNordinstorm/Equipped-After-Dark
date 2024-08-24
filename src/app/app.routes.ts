import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { NewComponent } from '../pages/new/new.component';
import { BeInspiredComponent } from '../pages/be-inspired/be-inspired.component';
import { DevelopersComponent } from '../pages/developers/developers.component';
import { SearchComponent } from '../pages/search/search.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { WishlistComponent } from '../pages/wishlist/wishlist.component';
import { CartComponent } from '../pages/cart/cart.component';
import { ProductsWomenComponent } from '../pages/products-women/products-women.component';
import { ProductsMenComponent } from '../pages/products-men/products-men.component';
import { ProductExpandedComponent } from '../components/product-expanded/product-expanded.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'be-inspired', component: BeInspiredComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products-women', component: ProductsWomenComponent },
  { path: 'products-men', component: ProductsMenComponent },

  { path: 'products-women/ :type', component: ProductsWomenComponent },
  { path: 'products-men/ :type', component: ProductsMenComponent },

  { path: 'product/:id', component: ProductExpandedComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppModule { }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutes = routes;
