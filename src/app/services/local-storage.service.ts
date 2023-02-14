import { Injectable } from '@angular/core';
import { CryptoLocalStorageService } from './crypto-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private _CryptoLocalStorage: CryptoLocalStorageService) { }
  // Set the json data to local storage
  setJsonValue(key: string, value: any) {
    this._CryptoLocalStorage.secureStorage.setItem(key, value);
  }
  // Get the json value from local storage
  getJsonValue(key: string) {
    return this._CryptoLocalStorage.secureStorage.getItem(key);
  }
  // Clear the local storage
  clearToken() {
    return this._CryptoLocalStorage.secureStorage.clear();
  }
}
