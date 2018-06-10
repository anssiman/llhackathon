import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Card }         from '../card';
import { CardService }  from '../card.service';

import { METHOD } from './../settings';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: [ './card-detail.component.css' ]
})
export class CardDetailComponent implements OnInit {
  method: string = METHOD;

  @Input() card: Card;
  @Input() cardRef: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.method = METHOD;
    if (this.method=='firebase')
      this.getCardRef();
    else
      this.getCard();
  }

  getCard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id)
      .subscribe(card => this.card = card);
  }

  getCardRef(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cardRef = this.cardService.getCardRef(id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.cardService.updateCard(this.card)
      .subscribe(() => this.goBack());
  }

  saveRef(card: Card): void {
    this.cardService.updateCardRef(card);
    this.goBack();
  }
}
