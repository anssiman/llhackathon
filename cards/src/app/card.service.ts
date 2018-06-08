import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Card } from './card';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CardService {

  private cardsUrl = 'api/cards';  // URL to web api

  constructor(
    private cardService: CardService,
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET cards from the server */
  getCards (): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardsUrl)
      .pipe(
        tap(cards => this.log(`fetched cards`)),
        catchError(this.handleError('getCards', []))
      );
  }

  /** GET card by id. Return `undefined` when id not found */
  getCardNo404<Data>(id: number): Observable<Card> {
    const url = `${this.cardsUrl}/?id=${id}`;
    return this.http.get<Card[]>(url)
      .pipe(
        map(cards => cards[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} card id=${id}`);
        }),
        catchError(this.handleError<Card>(`getCard id=${id}`))
      );
  }

  /** GET card by id. Will 404 if id not found */
  getCard(id: number): Observable<Card> {
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get<Card>(url).pipe(
      tap(_ => this.log(`fetched card id=${id}`)),
      catchError(this.handleError<Card>(`getCard id=${id}`))
    );
  }

  /* GET cards whose name contains search term */
  searchCards(term: string): Observable<Card[]> {
    if (!term.trim()) {
      // if not search term, return empty card array.
      return of([]);
    }
    return this.http.get<Card[]>(`${this.cardsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found cards matching "${term}"`)),
      catchError(this.handleError<Card[]>('searchCards', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new card to the server */
  addCard (card: Card): Observable<Card> {
    return this.http.post<Card>(this.cardsUrl, card, httpOptions).pipe(
      tap((card: Card) => this.log(`added card w/ id=${card.id}`)),
      catchError(this.handleError<Card>('addCard'))
    );
  }

  /** DELETE: delete the card from the server */
  deleteCard (card: Card | number): Observable<Card> {
    const id = typeof card === 'number' ? card : card.id;
    const url = `${this.cardsUrl}/${id}`;

    return this.http.delete<Card>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted card id=${id}`)),
      catchError(this.handleError<Card>('deleteCard'))
    );
  }

  /** PUT: update the card on the server */
  updateCard (card: Card): Observable<any> {
    return this.http.put(this.cardsUrl, card, httpOptions).pipe(
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
