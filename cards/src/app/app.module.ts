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
import { LotteryComponent } from './lottery/lottery.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

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
    LotteryComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
