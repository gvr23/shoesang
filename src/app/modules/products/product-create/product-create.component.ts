import {Component, OnInit, ViewChild} from '@angular/core';
import { faGem, faImage, faTint, faMapMarker, faShoePrints, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import {NgForm} from '@angular/forms';
import {Shoe} from '../../../models/shoe.model';
import {DatePipe} from '@angular/common';
import {Store} from '@ngrx/store';

import * as fromApp from '../../../reducers/app.reducer';
import * as ProductActions from '../../../actions/stock.actions';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  @ViewChild('f', { static: false }) creationForm: NgForm;
  faGem = faGem;
  faImage = faImage;
  faTint = faTint;
  faMapMarker = faMapMarker;
  faShoePrints = faShoePrints;
  faWareHouse = faWarehouse;

  constructor(private datePipe: DatePipe, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSubmit = () => {
    if (this.creationForm.valid) {
      const value = this.creationForm.value;
      const newShoe = new Shoe(
        123,
        value.shoeModel,
        value.shoeColor,
        value.shoeSize,
        value.shoeQuantity,
        value.shoeStatus,
        this.datePipe.transform(new Date(), 'dd-MMM-yyyy'),
        value.shoeImage
      );

      this.store.dispatch(new ProductActions.CreateProduct(newShoe));
      this.creationForm.reset();
    }
  };
  onClear = () => { this.creationForm.reset(); };

}
