import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { NewComponent } from '../pages/new/new.component';
import { BeInspiredComponent } from '../pages/be-inspired/be-inspired.component';
import { DevelopersComponent } from '../pages/developers/developers.component';
import { ProductsWomenComponent } from '../pages/products-women/products-women.component';
import { ProductsMenComponent } from '../pages/products-men/products-men.component';
import { ProductExpandedComponent } from '../components/product-expanded/product-expanded.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'be-inspired', component: BeInspiredComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'products-women', component: ProductsWomenComponent },
  { path: 'products-men', component: ProductsMenComponent },
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
