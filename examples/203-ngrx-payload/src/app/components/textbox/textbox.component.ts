import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {resetMsg, setMsg} from '../../store/msg/msg.actions';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html'
})
export class TextboxComponent implements OnInit {

  msg$: Observable<string>;

  constructor(private store: Store<{ msg: string }>) {
  }

  ngOnInit() {
    this.msg$ = this.store.pipe(
      select(s => s.msg)
    );
  }

  setText(value: string) {
    this.store.dispatch(setMsg(value));
  }

  clearText() {
    this.store.dispatch(resetMsg());
  }
}
