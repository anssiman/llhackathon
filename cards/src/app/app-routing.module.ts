import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { PriceComponent } from 'src/app/price/price.component';
import { LotteryComponent }  from './lottery/lottery.component';
import { LotteryDetailComponent }  from './lottery-detail/lottery-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CardDetailComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'price', component: PriceComponent },
  { path: 'lottery', component: LotteryComponent },
  { path: 'lottery-detail/:id', component: LotteryDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
