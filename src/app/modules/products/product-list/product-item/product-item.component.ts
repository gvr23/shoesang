import {Component, Input, OnInit} from '@angular/core';
import {Shoe} from '../../../../models/shoe.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Shoe;
  @Input() selected: number;

  constructor() { }

  ngOnInit() {
  }

}
