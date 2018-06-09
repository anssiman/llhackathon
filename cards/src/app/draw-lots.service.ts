import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Map } from './map';
import { Card } from './card';
import { CardService } from './card.service';
import { LotteryLock } from './lottery-lock';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({  providedIn: 'root'})
export class DrawLotsService {
  private cards: Card[];

  private lockUrl = 'api/lottery';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private cardService: CardService
  ) {this.cards=[]; }

  drawLots() : Boolean{
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

  /** POST price by id. Will 404 if id not found */
  setLock(lock: LotteryLock) : Observable<any> {
    return this.http.post(this.lockUrl, lock, httpOptions).pipe(
      tap(_ => this.log(`updated lock ${lock}`)),
      catchError(this.handleError<any>('setLock'))
    );
  }


      /** GET lock by name */
  getLock(name: string): Observable<LotteryLock> {
    const url = `${this.lockUrl}/${name}`;
    return this.http.get<LotteryLock>(url).pipe(
      tap(_ => this.log(`fetched lock name=${name}`)),
      catchError(this.handleError<LotteryLock>(`getLock name=${name}`))
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
    this.messageService.add('DrawLotsService: ' + message);
  }

}

