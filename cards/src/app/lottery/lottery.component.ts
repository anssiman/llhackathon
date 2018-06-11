import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { DrawLotsService } from '../draw-lots.service';
import { CardService } from '../card.service';
import { LotteryLock } from '../lottery-lock';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: [ './lottery.component.css' ]
})
export class LotteryComponent implements OnInit {
  private cards: Card[];

  constructor(private drawLotsService: DrawLotsService,
              private cardService: CardService) { this.cards=[];}

  ngOnInit() {
    this.drawLotsService.getLock('lottery-start').subscribe((lock: LotteryLock) => {
      if(lock!=undefined && lock.lock==0){
        lock.lock = 1;
        this.drawLotsService.setLock(lock).subscribe(() => {
          this.drawLotsService.getLock(lock.name).subscribe((lock: LotteryLock) => {
            if(lock!=undefined && lock.lock==1){
              this.drawLotsService.drawLots(this);
            }
          });
        });
      }
    });

//    this.drawLotsService.getLock('lottery-done').subscribe((lock: LotteryLock) => {
//      this.callbackDone(lock);
//    });

  }

  callbackDone(lock: LotteryLock) {
    if(lock!=undefined && lock.lock == 0){
      this.drawLotsService.getLock('lottery-done').subscribe((lock: LotteryLock) => {
        setTimeout(this.callbackDone(lock),3000);
        });
    }
    else if(lock!=undefined && lock.lock == 1){
      this.getCards();
    }
  }

  getCards(): Boolean {
    let R=false;
    this.cardService.getCards().subscribe((acards : Card[]) => {
      this.cards = JSON.parse(JSON.stringify(acards));
        
    if (this.cards && this.cards.length>0)
      this.cards = this.cards.filter(h => (h.owner!='' && h.owner!='system' && h.rnd!=''));

    if (this.cards && this.cards.length>0) {
      this.cards.sort((a,b)=>(+b.rnd)-(+a.rnd));
      R=true;
    }
  });
  return R;
  }

}
