import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductDashboardComponent} from './product-dashboard/product-dashboard.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {ProductsRoutesModule} from './products.routes';
import {ProductComponent} from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {PipesModule} from '../pipes/pipes.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDashboardComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent
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
