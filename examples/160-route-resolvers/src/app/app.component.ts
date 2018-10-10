import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="container">
      <h1>Some Route Resolver examples</h1>
      <a routerLink="home">Home</a> |
      <a routerLink="no-resolve">No resolver</a> |
      <a routerLink="simple">Simple resolver</a> |
      <a routerLink="api">Api resolver</a>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {

}
