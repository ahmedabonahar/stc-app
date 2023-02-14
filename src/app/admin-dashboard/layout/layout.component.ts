import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private _Router: Router) {}

  logout() {
    localStorage.clear();
    this._Router.navigate(['/login']);
  }

}
