import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'product-details/:id', loadChildren: () =>
          import('./product-details/product-details.module').then((m) => m.ProductDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
