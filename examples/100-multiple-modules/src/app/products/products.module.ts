import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// shared module, containing the search component
import {SharedModule} from '../shared/shared.module';

// custom component for this module
import {ProductsComponent} from './productList/products.component';

@NgModule({
	imports     : [
		CommonModule,
		SharedModule
	],
	exports     : [ProductsComponent],
	declarations: [ProductsComponent]
})
export class ProductsModule {
}
