import { NgModule } from '@angular/core';
import { LoadingDialogComponent } from './loading/loading-dialog/loading-dialog.component';
import { ErrorDialogComponent } from './errors/error-dialog/error-dialog.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material barrel module
import { MaterialModule } from '../material/material.module';

// custom services
import { ErrorDialogService } from './errors/error-dialog.service';
import { LoadingDialogService } from './loading/loading-dialog.service';
const sharedComponents = [LoadingDialogComponent, ErrorDialogComponent];

@NgModule({
  // use of the rest-operator (...) to simplify declarations and exports
  declarations: [...sharedComponents, LoadingDialogComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [...sharedComponents],
  providers: [ErrorDialogService, LoadingDialogService],
})
export class SharedModule {}
