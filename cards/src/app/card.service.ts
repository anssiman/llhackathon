import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Card } from './card';
import { MessageService } from './message.service';

import { CardFirebaseService } from './card.firebase.service';

import { METHOD } from './settings';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CardService {

  method: string = METHOD;

  private cardsUrl = 'api/cards';  // URL to web api

  constructor(
    private http: HttpClient,
    private firebase: CardFirebaseService,
    private messageService: MessageService) { }

  /** GET cards from the server */
  getCards (): Observable<Card[]> {
    if (this.method=='firebase')
      return this.firebase.getCards();
    return this.http.get<Card[]>(this.cardsUrl)
      .pipe(
        tap(cards => this.log(`fetched cards`)),
        catchError(this.handleError('getCards', []))
      );
  }

  getCardsRef(): Observable<any[]> {
    var dummy: Observable<any[]>;
    if (this.method=='firebase')
      return this.firebase.getCardsRef();
    return dummy;
  }

  getSuitsRef(): Observable<any[]> {
    var dummy: Observable<any[]>;
    if (this.method=='firebase')
      return this.firebase.getSuitsRef();
    return dummy;
  }

  /** GET card by id. Will 404 if id not found */
  getCard(id: number): Observable<Card> {
    if (this.method=='firebase')
      return this.firebase.getCard(id);
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get<Card>(url).pipe(
      tap(_ => this.log(`fetched card id=${id}`)),
      catchError(this.handleError<Card>(`getCard id=${id}`))
    );
  }

  getCardRef(id: number): Observable<any[]> {
    var dummy: Observable<any[]>;
    if (this.method=='firebase')
      return this.firebase.getCardRef(id);
    return dummy;
  }

  /* GET cards whose name contains search term */
  searchCards(term: string): Observable<Card[]> {
    if (this.method=='firebase')
      return this.firebase.searchCards(term);
    if (!term.trim()) {
      // if not search term, return empty card array.
      return of([]);
    }
    return this.http.get<Card[]>(`${this.cardsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found cards matching "${term}"`)),
      catchError(this.handleError<Card[]>('searchCards', []))
    );
  }

  /** PUT: update the card on the server */
  updateCard (card: Card): Observable<Card> {
    if (this.method=='firebase')
      return this.firebase.updateCard(card);
    return this.http.put<Card>(this.cardsUrl, card, httpOptions).pipe(
      tap(_ => this.log(`updated card id=${card.id}`)),
      catchError(this.handleError<any>('updateCard'))
    );
  }

  updateCardRef (card: Card): Observable<any> {
    if (this.method=='firebase')
      return this.firebase.updateCardRef(card);
    return this.http.put<Card>(this.cardsUrl, card, httpOptions).pipe(
      tap(_ => this.log(`updated card id=${card.id}`)),
      catchError(this.handleError<any>('updateCard'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CardService message with the MessageService */
  private log(message: string) {
    this.messageService.add('CardService: ' + message);
  }
}
