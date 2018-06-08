import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Price } from './price';
import { MessageService } from '../message.service';

@Injectable({ providedIn: 'root' })
export class PriceService {

  private priceUrl = 'api/price';  // URL to web api
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  /** GET card by id. Will 404 if id not found */
  getPrice(): Observable<Price> {
    const url = `${this.priceUrl}`;
    return this.http.get<Price>(url).pipe(
      tap(_ => this.log(`fetched price`)),
      catchError(this.handleError<Price>(`getPrice`))
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
