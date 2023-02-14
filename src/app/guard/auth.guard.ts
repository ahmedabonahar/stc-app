import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router, private _localStorageService: LocalStorageService) { }
  canActivate(): boolean {
    let token = this._localStorageService.getJsonValue('token');
    if (!token) {
      this.router.navigateByUrl("/login");
    }
    return true;
  }

}
