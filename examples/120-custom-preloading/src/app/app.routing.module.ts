import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {MyCustomPreloader} from './app.routing.loader';

// Note: no import from the various components. Only references to
// the modules, containing the components
const routes: Routes = [
	{path: '', redirectTo: 'customers', pathMatch: 'full'},
	{
		path        : 'customers',
		loadChildren: './customer/customer.module#CustomerModule',
		data        : {preload: true}
	},
	{
		path        : 'products',
		loadChildren: './products/products.module#ProductsModule',
		data        : {preload: true}
	},
	{
		path        : 'big-module',
		loadChildren: './very-big-module/very-big-module.module#VeryBigModule'
	},
];

const config: ExtraOptions = {
	preloadingStrategy: MyCustomPreloader
};
@NgModule({
	imports  : [RouterModule.forRoot(routes, config)],
	exports  : [RouterModule],
	providers: [MyCustomPreloader]
})
export class AppRoutingModule {
}