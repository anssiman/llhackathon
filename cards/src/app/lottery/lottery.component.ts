import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { DrawLotsService } from '../draw-lots.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: [ './lottery.component.css' ]
})
export class LotteryComponent implements OnInit {
  cards: Card[] = [];

  constructor(private drawLotsService: DrawLotsService,
              private cardService: CardService) { }

  ngOnInit() {
    this.drawLots();
    this.getCards();
  }

  drawLots(): void {
    this.drawLotsService.drawLots();  
  }

  getCards(): void {
    this.cardService.getCards()
    .subscribe(cards => this.cards = cards);

    if (this.cards && this.cards.length>0)
      this.cards = this.cards.sort((a,b)=>a.rnd-b.rnd);
  }

}
