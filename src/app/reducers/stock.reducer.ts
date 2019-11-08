import * as StockActions from '../actions/stock.actions';
import {Shoe} from '../models/shoe.model';

export interface State {
  stock: Shoe[];
}

const INITIAL_STATE: State = {
  stock: null
}

export function StockReducer(state = INITIAL_STATE, action: StockActions.StockActions) {
  switch (action.type) {
    case StockActions.STORE_PRODUCTS:
      return {
        ...state,
        stock: action.payload
      };
    case StockActions.CREATE_PRODUCT:
      return {
        ...state,
        stock: [...state.stock, action.payload]
      };
    case StockActions.UPDATE_PRODUCT:
      const updatedProduct = {...state.stock[action.payload.index], ...action.payload.product};
      const updatedStock = [...state.stock];
      updatedStock[action.payload.index] = updatedProduct;
      return {
        ...state,
        stock: updatedStock
      };
    case StockActions.DELETE_PRODUCT:
      return {
        ...state,
        stock: state.stock.filter((product, index) => index !== action.payload)
      }
    default:
      return state;
  }
}
