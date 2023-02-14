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
          import('./products/products.module').then((m) => m.ProductsModule)
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
export class AdminDashboardRoutingModule { }
