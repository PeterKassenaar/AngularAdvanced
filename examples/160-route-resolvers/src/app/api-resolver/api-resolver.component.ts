import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-api-resolver',
  template: `
    <h1>API Component</h1>
    <p>The data is directly available, as it is resolved before navigating.</p>
    <select class="form-control" *ngIf="data.length > 0">
      <option *ngFor="let user of data" [value]="user.name.title">
        {{ user.name.first }} {{ user.name.last}}
      </option>
    </select>
    <button class="btn btn-primary" (click)="showUsers = !showUsers">Toggle users</button>
    <div *ngIf="showUsers">
      <ul class="list-group">
        <li *ngFor="let user of data" class="list-group-item">
          <h4>{{ user.name.title}} {{ user.name.first }} {{ user.name.last}}</h4>
          ({{ user.email}})
        </li>
      </ul>
    </div>
  `
})
export class ApiResolverComponent implements OnInit {
  data: any;
  showUsers = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.data = this.route.snapshot.data.data.results; // inspect the object that the API returns!
    console.log(this.data);
  }

}
