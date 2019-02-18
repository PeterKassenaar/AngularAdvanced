import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import shared module (with search field)
import { SharedModule } from '../shared/shared.module';

// components for this module
import { CustomerComponent } from './customerList/customer.component';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [CustomerComponent],
	exports: [CustomerComponent] // component must be exported, otherwise it can't be used in other modules
})
export class CustomerModule {}
