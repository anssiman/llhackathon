import { Component, OnInit } from '@angular/core';
import { Price } from './price';
import { PriceService } from './price.service';

@Component({ 
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  prices: Price[];
  doEditId: number;

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    this.getPrices();
    this.doEditId = -1;
  }

  getPrices(): void {
    this.priceService.getPrices()
      .subscribe(prices => this.prices = prices);
  }

  startEdit(price): void {
    this.doEditId = price.id;
  }

  save(price: Price): void {
    this.priceService.setPrice(price)
      .subscribe(() => this.doEditId = -1);
  }

  remove(price: Price): void {
    this.prices = this.prices.filter(h => h !== price);
    this.priceService.deletePrice(price);
  }

  addPrice(): void {
    let p = new Price();
    p.name = '';
    p.description = '';
    p.provider = '';
    p.url = '';
    p.dateOfLottery = '';
    this.priceService.addPrice(p)
      .subscribe((price: Price) => {
        this.doEditId = price.id;
        this.prices.push(price);
      });
  }
}
