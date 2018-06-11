import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

import { Observable, of } from 'rxjs';

import { METHOD } from './../settings';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  method: string = METHOD;

  cards: Card[] = [];
  suits: Card[] = [];

  cardsRef: Observable<any[]>;
  suitsRef: Observable<any[]>;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.method = this.cardService.method;
    if (this.method=='firebase') {
      this.getCardsRef();
      this.getSuitsRef();
    }
    else {
      this.getCards();
      this.getSuits();  
    }
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards.slice(4, 60));
  }
  getSuits(): void {
    this.cardService.getCards()
      .subscribe(suits => this.suits = suits.slice(0, 4));
  }
  getCardsRef(): void {
    this.cardsRef = this.cardService.getCardsRef();
  }
  getSuitsRef(): void {
    this.suitsRef = this.cardService.getSuitsRef();
  }
}
