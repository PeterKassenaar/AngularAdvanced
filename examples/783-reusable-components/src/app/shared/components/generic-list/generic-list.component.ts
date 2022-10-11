import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html'
})
export class GenericListComponent {

  // the items to display are coming from the outside and
  // can be of any kind, or they can be null.
  @Input() items!: unknown[] | null;

  // Refence to the ng-container in the template
  @ContentChild('itemTemplate', {static: false})
  itemTemplateRef!: TemplateRef<any>;

}
