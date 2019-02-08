// person.component.ts - about change detection.

// References/Credits:
// https://alligator.io/angular/change-detection-strategy/
// https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input} from '@angular/core';
import {Person} from '../model/person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // uncomment this line to run only Change Detecion when input changes
})

export class PersonComponent implements DoCheck {

  @Input() person: Person;

  constructor(private cd: ChangeDetectorRef){} // Uncomment to inject ChangeDetectorRef

  ngDoCheck() {
    console.log('Change detector ran');
    this.cd.markForCheck(); // Uncomment this line to run Change Detector for *this particular component* again.
    // See https://angular.io/guide/lifecycle-hooks for more information on Lifecycle hooks like doCheck().
  }

}
