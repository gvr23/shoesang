import { Component, OnInit } from '@angular/core';
import { faGem, faImage, faTint, faMapMarker, faShoePrints, faWarehouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  faGem = faGem;
  faImage = faImage;
  faTint = faTint;
  faMapMarker = faMapMarker;
  faShoePrints = faShoePrints;
  faWareHouse = faWarehouse;

  constructor() { }

  ngOnInit() {
  }

}
