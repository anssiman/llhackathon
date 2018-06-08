import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Price } from './price';
import { MessageService } from '../message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PriceService {

  private priceUrl = 'api/price';  // URL to web api
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  /** GET price by id. Will 404 if id not found */
  getPrices(): Observable<Price[]> {
    const url = `${this.priceUrl}`;
    return this.http.get<Price[]>(url).pipe(
      tap(_ => this.log(`fetched prices`)),
      catchError(this.handleError<Price[]>(`getPrices`))
    );
  }

   /** POST price by id. Will 404 if id not found */
  setPrice(price: Price): Observable<any> {
    return this.http.post(this.priceUrl, price, httpOptions).pipe(
      tap(_ => this.log(`updated price ${price}`)),
      catchError(this.handleError<any>('updatePrice'))
    );
  }

  addPrice(price: Price): Observable<Price> {
    return this.http.post<Price>(this.priceUrl, price, httpOptions).pipe(
      tap((price_: Price) => this.log(`added price w/ id=${price_.id}`)),
      catchError(this.handleError<Price>('addPrice'))
    );
  }

  /** DELETE: delete the price from the server */
  deletePrice (price: Price | number): Observable<Price> {
    const id = typeof price === 'number' ? price : price.id;
    const url = `${this.priceUrl}/${id}`;

    return this.http.delete<Price>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted price id=${id}`)),
      catchError(this.handleError<Price>('deletePrice'))
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
    this.messageService.add('PriceService: ' + message);
  }
}
