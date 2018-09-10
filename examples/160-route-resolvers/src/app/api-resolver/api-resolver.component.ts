import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-api-resolver',
  template: `
    <h1>API Component</h1>
    <ul class="list-group">
      <li *ngFor="let user of data" class="list-group-item">
        <h4>{{ user.name.title}} {{ user.name.first }} {{ user.name.last}}</h4>
        ({{ user.email}})
      </li>
    </ul>
  `
})
export class ApiResolverComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.data = this.route.snapshot.data.data.results; // inspect the object that the API returns!
    console.log(this.data);
  }
}
