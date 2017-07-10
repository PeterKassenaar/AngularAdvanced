import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BigComponent} from './big-component/big-component.component';
import {RouterModule, Routes} from '@angular/router';

// Lazy loaded routes for this module
const bigModuleRoutes: Routes = [
	{path: '', component: BigComponent}
];
@NgModule({
	imports     : [
		CommonModule,
		RouterModule.forChild(bigModuleRoutes)
	],
	declarations: [BigComponent],
	exports     : [BigComponent]
})
export class VeryBigModule {
}
console.log('Very big module, loaded on demand');
