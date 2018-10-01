import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

interface Person {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('btn') btn: ElementRef;
  msg = 'Hello World';
  counter = 0;

  ngOnInit() {
    // Create an observable from the 'click' event
    // fromEvent(this.btn.nativeElement, 'click')
    //   .subscribe(res => this.msg = 'Goodbye World ' + ++this.counter);
  }

}
