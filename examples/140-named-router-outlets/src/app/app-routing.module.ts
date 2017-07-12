import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CityComponent} from './city/city.component';
import {CityListComponent} from './city-list/city-list.component';
import {CityDetailComponent} from './city-detail/city-detail.component';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{
		path    : 'cities', component: CityComponent,
		children: [
			{path: 'cityList', component: CityListComponent, outlet: 'list'},
			{path: ':id', component: CityDetailComponent, outlet: 'detail'}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
