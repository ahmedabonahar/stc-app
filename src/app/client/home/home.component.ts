import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClientApiService } from '../client-services/client-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  categories: any = [];
  allProductsData: any = [];

  constructor(private _apiServices: ClientApiService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllProducts();
    this.getAllCategoriesNameDOM();
  }

  getAllCategoriesNameDOM() {
    this._apiServices.getAllCategoriesNames().subscribe({
      next: (data: any) => {
        this.categories = data;
      }, error: (err: Error) => {
      }
    })
  }


  getAllCategoryDOM(categoryName: string) {
    console.log(categoryName);
    if (categoryName != '') {
      this.getProductsByCategoryName(categoryName);
    } else {
      this.getAllProducts();
    }
  }

  getAllProducts() {
    this._apiServices.getAllProducts().subscribe({
      next: (data: any) => {
        this.allProductsData = data;
      }, error: (err: Error) => {
      }
    })
  }


  getProductsByCategoryName(categoryName: string) {
    this._apiServices.getAllProductsByCategoryName(categoryName).subscribe({
      next: (data: any) => {
        this.allProductsData = data;
      }, error: (err: Error) => {
      }
    })
  }

}
