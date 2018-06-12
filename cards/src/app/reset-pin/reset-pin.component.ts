import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { CardService } from '../card.service';
import { DrawLotsService } from '../draw-lots.service';
import { LotteryLock } from '../lottery-lock';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: ['./reset-pin.component.css']
})
export class ResetPinComponent implements OnInit {
  pinValue : string;
  cards: Card[];

  constructor(
    private cardService: CardService,
    private drawLotsService: DrawLotsService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  reset() {
    if(this.pinValue == '1234'){
      this.cardService.getCards().subscribe((acards : Card[]) => {
        this.cards = JSON.parse(JSON.stringify(acards));
        for (var i = 0; i < this.cards.length; i++) {
          this.cards[i].rnd = undefined;
          this.cards[i].owner = "";
          this.cardService.updateCard (this.cards[i]).subscribe();
        }
      });
      this.drawLotsService.getLock('lottery-start').subscribe((lock: LotteryLock) => {
        this.resetLock(lock);
      });
      this.drawLotsService.getLock('lottery-done').subscribe((lock: LotteryLock) => {
        this.resetLock(lock);
      });
      window.location.reload();
    }
  }

  resetLock(lock: LotteryLock) {
    if(lock!=undefined){
      lock.lock = 0;
      this.drawLotsService.setLock(lock).subscribe(() =>{
        this.drawLotsService.getLock(lock.name).subscribe((lock: LotteryLock) => {
          let L = lock.lock;
        });
      });
    }
  }

  pin(value: string) {
    this.pinValue = value;
  }
}
