import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-no-resolver',
  template: `
    <h1>No Resolver component</h1>
    <p>This component shows a string, after a two second (2 sec) delay.</p>
    <p>The component is loaded without resolving it's data first. The delay is on the component.</p>
    <hr>
    <p *ngIf="message |async as message;else loading ">
      {{ message }}
    </p>
    <ng-template #loading>
      loading...
    </ng-template>
  `,
  styles: []
})
export class NoResolverComponent implements OnInit {
  message: Observable<string>;

  ngOnInit() {
    this.message = of('Hello World')
      .pipe(
        delay(2000)
      )
  }

}
