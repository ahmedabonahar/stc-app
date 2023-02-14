import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'add-product', component: AddEditProductComponent},
  {path: 'edit-product/:id', component: AddEditProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
