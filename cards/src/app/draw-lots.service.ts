import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Map } from './map';
import { Card } from './card';
import { CardService } from './card.service';


@Injectable({  providedIn: 'root'})
export class DrawLotsService {
  private cards: Card[];
  constructor(private cardService: CardService) {this.cards=[]; }

  drawLots() : boolean{
    let R=false;
    this.cardService.getCards().subscribe((acards : Card[]) => {
      this.cards = JSON.parse(JSON.stringify(acards));
    if(this.cards && this.cards.length>0)
      this.cards = this.cards.filter(h => (h.owner != '' && h.owner!='system'));
    let M = new Map<Boolean>();
    let N=0;
    for (var i = 0; i < this.cards.length; i++) {
      for(;1;){
        N = Math.floor(100000*Math.random());
        if(M.has(N)===true)
          continue;
        break;
      };
      M.add(N,true);
      this.cards[i].rnd = N.toString();
      this.cardService.updateCard (this.cards[i]).subscribe();
      R=true;
    }
  });
  return R;
  }

}

