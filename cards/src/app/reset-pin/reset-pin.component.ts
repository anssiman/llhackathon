import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: ['./reset-pin.component.css']
})
export class ResetPinComponent implements OnInit {
  pinValue : string;
  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  reset(value : string){
    if(this.pinValue == '1234'){
      this.cardService.getCards().subscribe((acards : Card[]) => {
        this.cards = JSON.parse(JSON.stringify(acards));
      for (var i = 0; i < this.cards.length; i++) {
        this.cards[i].rnd = undefined;
        this.cards[i].owner = undefined;
        this.cardService.updateCard (this.cards[i]).subscribe();
      }
    });
    }
  }

  pin(value: string) {
    this.pinValue = value;
  }
}
