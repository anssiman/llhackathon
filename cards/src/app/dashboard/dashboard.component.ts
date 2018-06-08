import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  cards: Card[] = [];
  suits: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getCards();
    this.getSuits();
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards.slice(4, 60));
  }
  getSuits(): void {
    this.cardService.getCards()
      .subscribe(suits => this.suits = suits.slice(0, 4));
  }
}
