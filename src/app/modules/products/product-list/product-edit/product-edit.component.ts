import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';
import {faGem, faImage, faTint, faMapMarker, faShoePrints, faWarehouse, faSave, faWindowClose} from '@fortawesome/free-solid-svg-icons';

import {Shoe} from '../../../../models/shoe.model';
import * as fromApp from '../../../../reducers/app.reducer';
import * as ProductActions from '../../../../actions/stock.actions';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  shoeForm: FormGroup;
  faGem = faGem;
  faImage = faImage;
  faTint = faTint;
  faMapMarker = faMapMarker;
  faShoePrints = faShoePrints;
  faWareHouse = faWarehouse;
  faSave = faSave;
  faClose = faWindowClose;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromApp.AppState>, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.getShoeId();
  }

  formInit = () => {
    let editingShoe: Shoe = null;
    this.store.select('StockReducer').pipe(
      map(stockState => stockState.stock.find(item => item.shoeId === this.id))
    ).subscribe(shoe => editingShoe = shoe);
    this.shoeForm = new FormGroup({
      shoeModel: new FormControl(editingShoe.model, [Validators.required]),
      shoeColor: new FormControl(editingShoe.color, [Validators.required]),
      shoeStatus: new FormControl(editingShoe.status, [Validators.required]),
      shoeSize: new FormControl(editingShoe.size, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      shoeQuantity: new FormControl(editingShoe.quantity, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      shoeImage: new FormControl(editingShoe.imagePath, [Validators.required])
    });
  };
  onSubmit = () => {
    if (this.shoeForm.valid) {
      const value = this.shoeForm.value;
      const shoeToEdit = new Shoe(
        this.id,
        value.shoeModel,
        value.shoeColor,
        value.shoeSize,
        +value.shoeQuantity,
        value.shoeStatus,
        this.datePipe.transform(new Date(), 'dd-MMM-yyyy'),
        value.shoeImage
      );

      this.store.dispatch(new ProductActions.UpdateProduct({index: this.id, product: shoeToEdit}));
      this.router.navigate(['products/list', this.id]);
    }
  };
  onCancel = () => { this.router.navigate(['products/list', this.id]); };
  getShoeId = () => {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.formInit();
    });
  };
}
