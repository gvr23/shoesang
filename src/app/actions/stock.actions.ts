import {Action} from '@ngrx/store';
import {Shoe} from '../models/shoe.model';

export const FETCH_STOCK = '[Stock Actions] Fetch Stock';
export class FetchStock implements Action {
  readonly type = FETCH_STOCK;
}
export const STORE_PRODUCTS = '[Stock Actions] Store Products';
export class StoreProducts implements Action {
  readonly type = STORE_PRODUCTS;
  constructor(public payload: Shoe[]) {}
}
export const CREATE_PRODUCT = '[Stock Actions] Create Product';
export class CreateProduct implements Action {
  readonly type = CREATE_PRODUCT;
  constructor(public payload: Shoe) {}
}
export const UPDATE_PRODUCT = '[Stock Actions] Update Product';
export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;
  constructor(public payload: {index: number, product: Shoe}) {}
}
export const DELETE_PRODUCT = '[Stock Actions] Delete Product';
export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public payload: number) {}
}
export const SET_FILTER = '[Stock Actions] Set Filter';
export class SetFilter implements Action {
  readonly type = SET_FILTER;
  constructor(public payload: string) {}
}

export type StockActions =
  | FetchStock
  | StoreProducts
  | CreateProduct
  | UpdateProduct
  | DeleteProduct
  | SetFilter;
