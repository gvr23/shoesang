import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ProductsRoutesModule} from './products.routes';
import {ProductComponent} from './product.component';
import {ProductDashboardComponent} from './product-dashboard/product-dashboard.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductDetailComponent} from './product-list/product-detail/product-detail.component';
import { ProductEditComponent } from './product-list/product-edit/product-edit.component';

import {PipesModule} from '../pipes/pipes.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProductItemComponent } from './product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDashboardComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProductsRoutesModule,
    PipesModule,
    FontAwesomeModule
  ]
})
export class ProductsModule {}
