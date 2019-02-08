import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Person} from '../model/person.interface';

@Component({
    selector: 'app-person-detail',
    templateUrl: './person-detail.component.html',
    styleUrls: ['./person-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailComponent implements OnInit {
    @Input() person: Person;

    // constructor(private cd: ChangeDetectorRef){} // Uncomment to inject ChangeDetectorRef


    ngOnInit() {
        // this.cd.markForCheck()
    }

}
