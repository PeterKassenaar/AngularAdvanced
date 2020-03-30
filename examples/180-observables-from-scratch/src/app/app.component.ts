import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, of, Subscription, throwError} from 'rxjs';
import {filter, finalize, map, switchMap, take, takeUntil, takeWhile} from 'rxjs/operators';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    @ViewChild('btn') btn: ElementRef;
    @ViewChild('txtInput') input: ElementRef;
    msg = 'Hello World';
    counter = 0;
    sub: Subscription;

    ngOnInit() {
        // Create an observable from the 'click' event.
        // 1. Data input - we create an observable from the click event of a button.
        fromEvent(this.btn.nativeElement, 'click')
            // 2. using the .pipe() method to apply 0, 1 or more operators on the stream
            .pipe(
                map(event => {  // Do 2 things here: increment counter, emit value (i.e. a string)
                    this.counter++;
                    return 'Goodbye world';
                })
                // ... more operators, see for example https://www.learnrxjs.io/
            )
            // 3. Final input, in the form of a .subscribe() block.
            //   We can also use the | async pipe in the view to let Angular handle subscriptions
            .subscribe(result => this.msg = result);

        // *****************
        // Workshop: create a textbox and a new button.
        // Subscribe to the stream coming from the textbox (or use | async).
        // set msg to the value you typed into the textobx.
        // *****************
    }
}
