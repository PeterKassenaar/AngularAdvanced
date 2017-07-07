import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

// shared module, containing the search component
import {SharedModule} from '../shared/shared.module';

// custom component for this module
import {ProductsComponent} from './products.component';

const productRoutes: Routes = [
	{path: '', component: ProductsComponent}
];

@NgModule({
	imports     : [
		CommonModule,
		SharedModule,
		RouterModule.forChild(productRoutes)
	],
	exports     : [ProductsComponent],
	declarations: [ProductsComponent]
})
export class ProductsModule {
}
console.log('ProductsModule loaded lazily...');