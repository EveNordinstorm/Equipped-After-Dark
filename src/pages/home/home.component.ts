import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { HorizontalCardsComponent } from '../../components/horizontal-cards/horizontal-cards.component';
import { AdvertComponent } from '../../components/advert/advert.component';
import { FeaturedCardsComponent } from '../../components/featured-cards/featured-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HorizontalCardsComponent, AdvertComponent, FeaturedCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
	constructor(private router: Router) {}
  
	navigateTo(path: string): void {
	  this.router.navigate([path]);
	}
}
