import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import * as fromApp from '../../../../reducers/app.reducer';
import * as ProductActions from '../../../../actions/stock.actions';
import {Shoe} from '../../../../models/shoe.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  productDetail: Shoe;
  faTrash = faTrashAlt;
  faEdit = faPencilAlt;

  constructor(private router: Router, private currRoute: ActivatedRoute, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.currRoute.params.pipe(
      map((params: Params) => +params.id),
      switchMap((id: number) => {
        this.id = id;
        return this.store.select('StockReducer');
      }),
      map(stockState => stockState.stock.find((item, index) => item.shoeId === this.id))
    ).subscribe(shoe => this.productDetail = shoe);
  }

  onEditRecipe = () => { this.router.navigate(['edit'], { relativeTo: this.currRoute }); };
  onDeleteProduct = () => {
    this.store.dispatch(new ProductActions.DeleteProduct(this.id));
    this.router.navigate(['/products/list']);
  };
}
