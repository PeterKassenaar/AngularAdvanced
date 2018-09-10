import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-simple-resolver',
  template: `
    <h1>Simple Resolver component</h1>
    <p>This component shows a string, after a two second (2 sec) delay.</p>
    {{ data.message }}
  `,
  styles: []
})
export class SimpleResolverComponent implements OnInit {

  data: any;
  constructor(private  route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data;
  }

}
