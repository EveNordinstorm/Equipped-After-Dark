import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-horizontal-cards',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './horizontal-cards.component.html',
  styleUrls: ['./horizontal-cards.component.scss']
}) 
export class HorizontalCardsComponent implements AfterViewInit {
  @ViewChild('scrl') scrl: ElementRef | undefined;

  cards = [
    { img: '/assets/horizontal-cards-01.jpg', title: 'Women' },
    { img: '/assets/horizontal-cards-02.jpg', title: 'Men' },
    { img: '/assets/horizontal-cards-03.jpg', title: 'New' },
    { img: '/assets/horizontal-cards-04.jpg', title: 'Sale' },
    { img: '/assets/horizontal-cards-05.jpg', title: 'Inspiration' }
  ];

  cardWidth = 300;
  duplicatedCards = [...this.cards, ...this.cards, ...this.cards];

  ngAfterViewInit() {
    if (this.scrl) {
      const initialScrollPosition = this.cards.length * this.cardWidth;
      this.scrl.nativeElement.scrollLeft = initialScrollPosition;
    }
  }

  slide(shift: number) {
    if (this.scrl) {
      this.scrl.nativeElement.scrollBy({
        left: shift,
        behavior: 'smooth'
      });

      setTimeout(() => this.scrollCheck(), 300);
    }
  }

  scrollCheck() {
    if (this.scrl) {
      const maxScroll = (this.cards.length * 2) * this.cardWidth;
      const currentScroll = this.scrl.nativeElement.scrollLeft;
      const midpoint = this.cards.length * this.cardWidth;

      if (currentScroll >= maxScroll) {
        this.scrl.nativeElement.scrollLeft = currentScroll - midpoint;
      } 
      else if (currentScroll <= 0) {
        this.scrl.nativeElement.scrollLeft = currentScroll + midpoint;
      }
    }
  }
}
