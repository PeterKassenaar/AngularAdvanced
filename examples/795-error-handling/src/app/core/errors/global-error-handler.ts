// global-error-handler.ts
// This is (as the name implies) the global error handling service.
// It implements the ErrorHandler interface.
// The global error handler catches all errors occurring within our application.
// We use it in core.module.ts, where we use this service to override the
// default provided error handler from Angular.
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { ErrorDialogService } from '../../shared/errors/error-dialog.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorDialogService: ErrorDialogService,
    private zone: NgZone
  ) {}

  // The handleError method is called whenever an error is thrown somewhere in the application.
  // It is defined in the ErrorHandler interface.
  //  The error is passed as a parameter of type any and can be processed further inside the method.
  //  In our case a dialog is opened where the error message should be displayed
  //  and the error is logged to the browser console.
  handleError(error: any) {
    // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }
    // The opening of the dialog takes place in a callback of zone.run, so that
    // the dialog window can be closed even if the error is thrown outside the ngZone.
    // This is for example the case if an error occurs in a lifecycle hook like the
    // ngOnInit function in a component.
    // @ts-ignore
    this.zone.run(() =>
      this.errorDialogService.openDialog(
        error?.message || 'Undefined client error',
        error?.status
      )
    );

    // for now: log this error the the console.
    // In real life: You might want to have an ErrorLogging-service, or the like to
    // persist your error to a backend database.
    console.error('Error from global error handler', error);
  }
}
