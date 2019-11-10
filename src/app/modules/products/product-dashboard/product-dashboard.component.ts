import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../../../reducers/app.reducer';
import {Shoe} from '../../../models/shoe.model';
import {Subscription} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit, OnDestroy, DoCheck {
  private storeSub: Subscription;
  products: Shoe[] = [];
  filteringString = '';

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.storeSub = this.store.select('StockReducer').pipe(
      map(stocksState => stocksState.stock)
    ).subscribe(stocks => this.products = stocks);
  }
  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  obtainShoes = () => {
    this.store.select('StockReducer').pipe(take(1)).subscribe( stockState => {
      this.filteringString = stockState.filterString;
    });
  }

  ngDoCheck(): void {
    this.obtainShoes();
  }

}
