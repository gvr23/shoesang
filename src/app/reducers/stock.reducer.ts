import * as StockActions from '../actions/stock.actions';
import {Shoe} from '../models/shoe.model';

export interface State {
  stock: Shoe[];
  filterString: string;
}

const INITIAL_STATE: State = {
  stock: [
    new Shoe(0,'Cecile', 'Nude', '35', 12, 'New', '25-Dec-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/qhvf4vit4lwkEHNAHGfD3-XWjMgItwywU5YxpLeq.jpeg'),
    new Shoe(1,'Laetitia', 'Black', '36', 12, 'Biombo', '06-Oct-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/XS6Cq9a2pD8F9KfTgQz1RubrE7fglYtbChYo4vvi.jpeg'),
    new Shoe(2,'Laurence', 'Denim Blue', '38', 6, 'New', '04-Oct-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/OVRTFXYuy7uEhEyIUNAwxXSHhqULRBPaUC1rnLDw.jpeg'),
    new Shoe(3,'Noeud D Ete', 'Camel', '39', 6, 'New', '10-Ago-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/9ydfRuXrO6GvfsKEgcZTLNFDqeeiDCn0BuzxItCD.jpeg'),
    new Shoe(4,'Sandrine', 'Soft Tofee', '35', 4, 'Showroom', '25-Dec-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/cWU3A0RoEZMq5ohNCc4jfAsoPYcnLbuoLA3PzbJX.jpeg'),
    new Shoe(5,'Sophie', 'Blacke', '35', 4, 'Showroom', '02-Jul-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/Wl5FY6sYz3Xw1S0NFcqOmumS8b9kKm8mckEHWw-s.jpeg'),
    new Shoe(6,'Solange', 'Camel', '38', 10, 'New', '07-Nov-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/W5zUEkwz08U7F-0t6NuuO9S1ryOnRFZIAOjB80UT.jpeg'),
    new Shoe(7,'Aphrodite', 'Nude', '35', 9, 'Bstore', '25-Jun-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/q3fPK9ZKpHYd3fpjywprkVRDWGSnH0-3KHziGV0f.jpeg'),
    new Shoe(8,'Astrid', 'Black Crystal', '36', 4, 'Showroom', '25-Jul-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/SEIjwxXttFmdiyAOE3TXKQvwdeuHHAm5m16f5I6x.jpg'),
    new Shoe(9,'Buoux', 'Nude Golden', '37', 7, 'New', '25-Dec-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/XkRtd7SZh7z-c9I-QlP06YIKCkCstHb-QxysASCa.jpg'),
    new Shoe(10,'Sandrine', 'Soft Tofee', '35', 4, 'Showroom', '25-Dec-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/-DDpPL6bw4VcMNakDDSBHv24W-J9t8i2HAvd5-sg.jpeg'),
    new Shoe(11,'Sandrine', 'Black', '35', 4, 'Showroom', '25-Dec-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/06kBi8HTsZYLPjNm6SJ3QG1QN1wkMpaCWZqSgGJ9.jpeg'),
    new Shoe(12,'Solange', 'Camel', '38', 10, 'New', '07-Nov-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/W5zUEkwz08U7F-0t6NuuO9S1ryOnRFZIAOjB80UT.jpeg'),
    new Shoe(13,'Aphrodite', 'Nude', '35', 9, 'Bstore', '25-Jun-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/q3fPK9ZKpHYd3fpjywprkVRDWGSnH0-3KHziGV0f.jpeg'),
    new Shoe(14,'Cecile', 'Nude', '35', 12, 'New', '25-Dec-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/qhvf4vit4lwkEHNAHGfD3-XWjMgItwywU5YxpLeq.jpeg'),
    new Shoe(15,'Laetitia', 'Black', '36', 12, 'Biombo', '06-Oct-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/XS6Cq9a2pD8F9KfTgQz1RubrE7fglYtbChYo4vvi.jpeg'),
    new Shoe(16,'Laurence', 'Denim Blue', '38', 6, 'New', '04-Oct-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/v9jEqYjeiiyZ6vFCtnKIz4ri3gZ0xB7cpWCbGYWg.jpeg'),
    new Shoe(17,'Noeud D Ete', 'Camel', '39', 6, 'New', '10-Ago-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/9ydfRuXrO6GvfsKEgcZTLNFDqeeiDCn0BuzxItCD.jpeg'),
    new Shoe(18,'Sandrine', 'Soft Tofee', '35', 4, 'Showroom', '25-Dec-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/cWU3A0RoEZMq5ohNCc4jfAsoPYcnLbuoLA3PzbJX.jpeg'),
    new Shoe(19,'Sandrine', 'Black', '35', 2, 'Showroom', '25-Dec-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/06kBi8HTsZYLPjNm6SJ3QG1QN1wkMpaCWZqSgGJ9.jpeg'),
    new Shoe(20,'Solange', 'Camel', '38', 10, 'New', '07-Nov-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/W5zUEkwz08U7F-0t6NuuO9S1ryOnRFZIAOjB80UT.jpeg'),
    new Shoe(21,'Aphrodite', 'Nude', '35', 9, 'Bstore', '25-Jun-2019', 'https://www.chicchemin.com/centralfile/000003CB/productos/imagenes/q3fPK9ZKpHYd3fpjywprkVRDWGSnH0-3KHziGV0f.jpeg'),
  ],
  filterString: ''
};

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
      };
    case StockActions.SET_FILTER:
      return {
        ...state,
        filterString: action.payload
      };
    default:
      return state;
  }
}
