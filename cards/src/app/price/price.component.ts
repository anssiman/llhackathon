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

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    this.getPrice();
  }

  getPrice(): void {
    this.priceService.getPrice()
      .subscribe(price => this.price = price);
  }

}
