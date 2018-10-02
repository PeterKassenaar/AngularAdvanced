import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, of, Subscription, throwError} from 'rxjs';
import {catchError, filter, finalize, map, switchMap, take, takeUntil, takeWhile} from 'rxjs/operators';
import {assertNumber} from '@angular/core/src/render3/assert';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    @ViewChild('btn') btn: ElementRef;
    @ViewChild('txtInput') input: ElementRef;
    msg$: Observable<any>;
    counter: number = 0;
    sub: Subscription;
    counter$ = of(this.counter > 3);

    ngOnInit() {
        // Create an observable from the 'click' event
        //1. Hier komt de data vandaan
        this.msg$ = fromEvent(this.btn.nativeElement, 'click')
            .pipe(
                filter((event: MouseEvent) => event.shiftKey),  // filter shiftKey
                takeWhile(()=> this.counter < 3),               // totdat counter >= 3
                map(event => {                                  // counter ophogen, waarde emitten
                    this.counter++;
                    return this.input.nativeElement.value;
                }),
                finalize(() => console.log('Afgelopen'))        // bij unsubscribe()
            );
    }
}
