import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// components
import {HomeComponent} from './home/home.component';
import {SmartComponent} from './smart-view/smart.component';


const routes: Routes = [
	{
		path      : '',
		redirectTo: 'home',
		pathMatch : 'full'
	},
	{
		path     : 'home',
		component: HomeComponent
	},
	{
		path     : 'smart',
		component: SmartComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
