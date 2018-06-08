import { Injectable } from '@angular/core';

import { Card } from './card';
import { CardService } from './card.service';


@Injectable({
  providedIn: 'root'
})
export class DrawLotsService {
  cards: Card[];

  constructor(private cardService: CardService) { }


  getCards () {
    this.cardService.getCards().subscribe(cards => this.cards = cards);
  }

  drawLots(){
    this.getCards ();
    this.cards = this.cards.filter(h => h.owner != '');
    for (var i = 0; i < this.cards.length; i++) {
      this.cards[i].rnd = Math.floor(100000*Math.random());
    }
  }



}

