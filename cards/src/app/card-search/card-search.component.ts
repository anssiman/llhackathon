import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: [ './card-search.component.css' ]
})
export class CardSearchComponent implements OnInit {
  cards$: Observable<Card[]>;
  private searchTerms = new Subject<string>();

  constructor(private cardService: CardService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cards$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.cardService.searchCards(term)),
    );
  }
}
