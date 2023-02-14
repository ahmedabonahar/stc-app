import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  arabic = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {

  }


  useLanguage(language: string) {
    console.log(language);
    this.translate.use(language);
    console.log(this.translate.use(language))
    localStorage.setItem('lang', language);
    if (language == 'en')
      this.arabic = false;
    else
      this.arabic = true;
  }
}
