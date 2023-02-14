import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
  public host = environment._baseUrl;

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

constructor(private _HttpClient: HttpClient) { }


getAllProducts(): Observable<any> {
  return this._HttpClient.get(`${this.host}/products`);
}


getProductsByID(id: Number): Observable<any> {
  return this._HttpClient.get(`${this.host}/products/${id}`,  { headers: this.headers });
}

addProductsByID(id: Number): Observable<any> {
  return this._HttpClient.put(`${this.host}/products/${id}`,  { headers: this.headers });
}

updateProductsByID(): Observable<any> {
  return this._HttpClient.post(`${this.host}/products`,  { headers: this.headers });
}

deleteProductsByID(id: Number): Observable<any> {
  return this._HttpClient.delete(`${this.host}/products/${id}`,  { headers: this.headers });
}

}
