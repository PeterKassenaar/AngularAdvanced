import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit} from '@angular/core';
import {Person} from '../model/person.interface';

@Component({
    selector: 'app-person-detail',
    templateUrl: './person-detail.component.html',
    styleUrls: ['./person-detail.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailComponent implements DoCheck {
    @Input() person: Person;

    constructor(private cd: ChangeDetectorRef) {
    } // Uncomment to inject ChangeDetectorRef


    ngDoCheck() {
        // console.log('PersonDetailComponent :: Change detector ran (EVEN if NOTHING needs to be updated)');
        // this.cd.markForCheck();
    }

}
