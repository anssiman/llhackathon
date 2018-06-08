import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { DrawLotsService } from '../draw-lots.service';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: [ './lottery.component.css' ]
})
export class LotteryComponent implements OnInit {
  cards: Card[] = [];

  constructor(private drawLotsService: DrawLotsService) { }

  ngOnInit() {
    this.drawLots();
  }

  drawLots(): void {
    this.drawLotsService.drawLots();
  }
}
