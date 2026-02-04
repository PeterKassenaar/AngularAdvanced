import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'ngx-translate-demo';
  url: string = 'https://www.codeandweb.com/babeledit';

  // Using Constructor Injection here. In newer Angular applications
  // we can also use a syntax like 'translate = inject(TranslateService)'
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('nl');
    translate.use('nl')
  }

  // Switch language
  useLanguage(language: string): void {
    this.translate.use(language)
  }
}
