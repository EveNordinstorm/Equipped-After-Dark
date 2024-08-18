import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-cards.component.html',
  styleUrls: ['./featured-cards.component.scss'],
  animations: [
    trigger('slideUp', [
      state('hidden', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('0.5s ease-out', keyframes([
          style({ transform: 'translateY(100%)', opacity: 0, offset: 0 }),
          style({ transform: 'translateY(0)', opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class FeaturedCardsComponent {
  cardStates = ['hidden', 'hidden', 'hidden'];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const cards = document.querySelectorAll('.card-color');
    cards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.0;

      if (cardPosition < screenPosition) {
        setTimeout(() => {
          this.cardStates[index] = 'visible';
        }, index * 200);
      }
    });
  }
}
