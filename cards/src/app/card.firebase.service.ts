import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Card } from './card';
import { MessageService } from './message.service';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CardFirebaseService {

  constructor(
    private db: AngularFireDatabase,
    private messageService: MessageService) { }

    getCards(): Observable<Card[]> {
      var C: Observable<Card[]>;
      this.db.list('cards').snapshotChanges().subscribe(crds => C);
      return C.pipe(
          tap(cards => this.log(`fetched cards`)),
          catchError(this.handleError('getCards', []))
        );
    }    

    getCardsRef(): Observable<any[]> {
      this.log(`fetching cards`);
      return this.db.list('cards',ref =>  {let q = ref.orderByChild('id'); return q;}).valueChanges();
    }    

    getSuitsRef(): Observable<any[]> {
      this.log(`fetching suits`);
      return this.db.list('suits',ref =>  {let q = ref.orderByChild('id'); return q;}).valueChanges();
    }    

    getCard(id: number): Observable<Card> {
      var C: Observable<any>;
      this.db.list('cards',ref =>  {let q = ref.orderByChild('id').equalTo(id); return q;}).snapshotChanges().subscribe(crd => C);
      return C.pipe(
          tap(_ => this.log(`fetched card id=${id}`)),
          catchError(this.handleError<Card>(`getCard id=${id}`))
        );
    }    

    getCardRef(id: number): Observable<any[]> {
      this.log(`fetching card id=${id}`);
      return this.db.list('cards',ref =>  {let q = ref.orderByChild('id').equalTo(id); return q;}).valueChanges();
    }

    searchCards(term: string): Observable<Card[]> {
      if (!term.trim())
        return of([]);
      var C: Observable<Card[]>;
      this.db.list('cards').snapshotChanges().subscribe(crds => C);
      return C.pipe(
          tap(_ => this.log(`found cards matching "${term}"`)),
          catchError(this.handleError<Card[]>('searchCards', []))
        );
      }

    updateCard(card: Card): Observable<Card> {
      var C: Observable<Card>;
      this.db.list('cards',ref =>  {let q = ref.orderByChild('id').equalTo(card.id); return q;}).snapshotChanges().subscribe(crd => C);
      return C.pipe(
          tap(_ => this.log(`fetched card id=${card.id}`)),
          catchError(this.handleError<Card>(`getCard id=${card.id}`))
        );
    }
  
    updateCardRef(card: Card): Observable<any> {
      this.log(`updating card id=${card.id}, owner=${card.owner}`);
      var ref = this.db.database.ref(`cards/${card.id}`);
      ref.set({
          id:     card.id,
          value:  card.value,
          suit:   card.suit,
          owner:  card.owner,
          image:  card.image,
          bimage: card.bimage,
          name:   card.name, 
          rnd :   card.rnd
        })
        .then(function() {
          return ref.once("value");
        })
        .then(function(snapshot) {
           var data = snapshot.val();
        });   
      return this.db.list('cards',ref =>  {let q = ref.orderByChild('id').equalTo(card.id); return q;}).valueChanges();;
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
  
    private log(message: string) {
      this.messageService.add('CardFirebaseService: ' + message);
    }
  }
