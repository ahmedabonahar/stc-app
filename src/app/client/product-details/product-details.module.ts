import { ProductDetailsComponent } from './product-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  {path: '', component:  ProductDetailsComponent}
];
@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class ProductDetailsModule { }
