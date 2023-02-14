import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  TypeLoder:any;


  constructor(private router: Router) {
    this.resetLang();
  }



  onActivate(event) {
    window.scroll(0, 0);
  }

  getBodyLang() {
    if (localStorage.getItem('lang'))
      if (localStorage.getItem('lang') == 'en')
        return false;
    return true
  }

  resetLang() {
    localStorage.setItem('lang', 'en')
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.TypeLoder= SPINNER.threeStrings;
  }


}
