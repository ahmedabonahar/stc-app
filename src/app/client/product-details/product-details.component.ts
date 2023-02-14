import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminApiService } from 'src/app/admin-dashboard/admin-services/admin-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  productData: any = {};

  constructor(private _ActivatedRoute: ActivatedRoute, private _apiServices: AdminApiService, private formBuilder: FormBuilder) {
    let id = this._ActivatedRoute.snapshot.params['id'];
    this.getProductDetails(id);
  }

  getProductDetails(id: number) {
    this._apiServices.getProductsByID(id).subscribe({
      next: (data: any) => {
        this.productData = data;
      }, error: (err: Error) => {
      }
    })
  }
}
