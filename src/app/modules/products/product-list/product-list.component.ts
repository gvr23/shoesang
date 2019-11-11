import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import * as fromApp from '../../../reducers/app.reducer';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {Shoe} from '../../../models/shoe.model';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, DoCheck, OnDestroy {
  products: Shoe[] = [];
  storeSub: Subscription;
  filteringString = '';

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() { this.getProductsSubscription(); }
  ngDoCheck(): void { this.obtainFilteringString(); }
  ngOnDestroy(): void { this.storeSub.unsubscribe(); }

  getProductsSubscription = () => {
    this.storeSub = this.store.select('StockReducer').pipe(
      map(stockState => stockState.stock)
    ).subscribe(stock => this.products = stock);
  }
  obtainFilteringString = () => {
    this.store.select('StockReducer').pipe(take(1)).subscribe(stockState => this.filteringString = stockState.filterString);
  }
}
