import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const route: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(route, { preloadingStrategy: PreloadAllModules })]
})
export class AppRoutes {}
