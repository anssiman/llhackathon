import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Card }         from '../card';
import { CardService }  from '../card.service';

@Component({
  selector: 'app-lottery-detail',
  templateUrl: './lottery-detail.component.html',
  styleUrls: [ './lottery-detail.component.css' ]
})
export class LotteryDetailComponent implements OnInit {
  @Input() card: Card;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id)
      .subscribe(card => this.card = card);
  }

  goBack(): void {
    this.location.back();
  }

 clear(): void {
    this.card.owner= '';
    this.cardService.updateCard(this.card)
      .subscribe(() => this.goBack());
  }
}
