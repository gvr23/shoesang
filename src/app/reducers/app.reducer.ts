import * as fromStockReducer from './stock.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  StockReducer: fromStockReducer.State;
}

export const AppReducers: ActionReducerMap<AppState> = {
  StockReducer: fromStockReducer.StockReducer
}
