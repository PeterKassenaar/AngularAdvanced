import {Component, Input} from '@angular/core';
import {Country} from "../../shared/models/country.interface";

@Component({
  selector: 'app-country-template',
  templateUrl: './country-template.component.html',
  styleUrls: ['./country-template.component.css']
})
export class CountryTemplateComponent {
  @Input() country!: Country;
}
