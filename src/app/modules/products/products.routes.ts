import {RouterModule, Routes} from '@angular/router';
import {ProductDashboardComponent} from './product-dashboard/product-dashboard.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDetailComponent} from './product-list/product-detail/product-detail.component';
import {ProductEditComponent} from './product-list/product-edit/product-edit.component';
import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '', component: ProductComponent, children: [
      {path: '', component: ProductDashboardComponent},
      {path: 'new', component: ProductCreateComponent},
      {
        path: 'list', component: ProductListComponent, children: [
          {path: ':id', component: ProductDetailComponent},
          {path: ':id/edit', component: ProductEditComponent}
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutesModule {
}
