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

    ngOnInit() {
        // Create an observable from the 'click' event
        //1. Hier komt de data vandaan
        this.msg$ = fromEvent(this.btn.nativeElement, 'click')
            .pipe(
                filter((event: MouseEvent) => event.shiftKey),
                map(event => {
                    this.counter++;
                    return this.input.nativeElement.value;
                }),
                finalize(() => console.log('Afgelopen'))
            );
    }
}
