import { Component, OnInit } from '@angular/core';
import { Price } from './price';
import { PriceService } from './price.service';

@Component({ 
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  price: Price;
  doEdit: boolean;

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    this.getPrice();
    this.doEdit = false;
  }

  getPrice(): void {
    this.priceService.getPrice()
      .subscribe(price => this.price = price);
  }

  startEdit(): void {
    this.doEdit = true;
  }

  save(): void {
    this.priceService.setPrice(this.price)
      .subscribe(() => this.doEdit = false);
  }
}
