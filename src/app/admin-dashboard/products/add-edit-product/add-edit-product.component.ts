import { AdminApiService } from './../../admin-services/admin-api.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent {

  constructor(private _ActivatedRoute: ActivatedRoute, private _apiServices: AdminApiService, private formBuilder: FormBuilder) {
    let id = this._ActivatedRoute.snapshot.params['id'];
    console.log(id);
    this.getProductDetails(id);
  }

  getProductDetails(id: number) {
    this._apiServices.getProductsByID(id).subscribe({
      next: (data: any) => {
        console.log(data);

      }, error: (err: Error) => {
      }
    })
  }

}
