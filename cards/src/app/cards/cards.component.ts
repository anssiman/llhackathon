import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { CardService } from '../card.service';

import { Observable, of } from 'rxjs';

import { METHOD } from './../settings';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  method: string = METHOD;

  cards: Card[];
  cardsRef: Observable<any[]>;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    if (this.method=='firebase') {
      this.getCardsRef();
    }
    else {
      this.getCards();
    }
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards.slice(4, 60));
  }

  getCardsRef(): void {
    this.cardsRef = this.cardService.getCardsRef();
  }
}
