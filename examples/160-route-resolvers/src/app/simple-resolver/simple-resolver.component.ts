import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-simple-resolver',
  template: `
    <h1>Simple Resolver component</h1>
    <p>This component shows a string, after a two second (2 sec) delay.</p>
    <p>The delay is on the resolver. The component only gets loaded once the data is available.</p>
    <p>So the data shows instantly on this component.</p>
    <hr>
    <p>{{ data.message }}</p>
  `,
  styles: []
})
export class SimpleResolverComponent implements OnInit {

  data: any; // make note: you're losing type safety here! Is there a workaround?
  constructor(private  route: ActivatedRoute) {
  }

  ngOnInit() {
    this.data = this.route.snapshot.data; // the message is on the 'data' property of the route snapshot
  }

}
