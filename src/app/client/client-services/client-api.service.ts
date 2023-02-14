import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {

  public host = environment._baseUrl;

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private _HttpClient: HttpClient) { }

  getAllCategoriesNames(): Observable<any> {
    return this._HttpClient.get(`${this.host}/products/categories`);
  }

  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`${this.host}/products`);
  }


  getProductsByID(id: Number): Observable<any> {
    return this._HttpClient.get(`${this.host}/products/${id}`, { headers: this.headers });
  }

  getAllProductsByCategoryName(categoryName: string): Observable<any> {
    console.log(`${this.host}/products/${categoryName}`);

    return this._HttpClient.get(`${this.host}/products/category/${categoryName}`);
  }

}
