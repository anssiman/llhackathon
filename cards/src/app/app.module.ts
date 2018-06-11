import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CardDetailComponent }  from './card-detail/card-detail.component';
import { CardsComponent }      from './cards/cards.component';
import { CardSearchComponent }  from './card-search/card-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { PriceComponent } from './price/price.component';
import { LotteryComponent } from './lottery/lottery.component';
import { LotteryDetailComponent } from './lottery-detail/lottery-detail.component';
import { ResetPinComponent } from './reset-pin/reset-pin.component';

import { ResolveFirestoreUrlPipe } from './resolve.firestore.url.pipe';
import { ResolveFirestoreUrlByOwnerPipe } from './resolve.firestore.url.o.pipe';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//import { enableProdMode } from '@angular/core';
//enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA_2fHjzIFCOq3z36hnV0umn7pw86YjJY8",
      authDomain: "vertex-lottery.firebaseapp.com",
      storageBucket: "vertex-lottery.appspot.com",
      projectId: "vertex-lottery",
      databaseURL:  "vertex-lottery.firebaseio.com"
    }),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    CardDetailComponent,
    MessagesComponent,
    CardSearchComponent,
    PriceComponent,
    LotteryComponent,
    LotteryDetailComponent,
    ResetPinComponent,
    ResolveFirestoreUrlPipe,
    ResolveFirestoreUrlByOwnerPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
