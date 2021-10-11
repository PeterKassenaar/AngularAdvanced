import {Component, OnInit} from '@angular/core';
import {City} from '../shared/model/city.model';
import {CityService} from '../shared/services/city.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    // Properties
    currentCity: City;
    cities: City[];
    visitedCities: City[];
    cityPhoto: string;

    constructor(private cityService: CityService) {

    }

    ngOnInit() {
        this.cityService.getCities()
            .subscribe(cities => this.cities = cities);
    }

    getCity(city: City) {
        this.currentCity = city;
        this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
    }

    // toggle visited or not visited
    toggleCity(city: City) {
        city.visited = !city.visited;
        this.visitedCities = this.cities.filter(city => city.visited);
    }

    //********************************************
    // When working with observables
    //********************************************
	//
	// cities$: Observable<City[]>; // replace
	//
    // public ngOnInit() {
    //     // use the shareReplay operator to 'reload' the stream
    //     this.cities$ = this.cityService.getCities()
    //         .pipe(
    //             shareReplay(1)
    //         );
    // }
	//
	// // toggle visited or not visited
    // public toggleCity(city: City) {
    //     // here: replaying the pipe we set up in ngOnInit
    //     this.cities$.pipe(
    //         map((c: City) => {
    //             if (c.id === city.id) {
    //                 c.visited = city.visited;
    //             }
    //         })).subscribe();
	//
    //     this.visitedCities$ = this.cities$
	// 		.pipe(
	// 			map((cities: City[]) => cities.filter(
    //         		city => city.visited))
	// 		);
    // }
}
