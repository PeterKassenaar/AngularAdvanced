// file-upload.component.ts
// credits: Jeff Delany, angularfire
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from 'angularfire2/storage';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {finalize, map} from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styles: [`
    .dropzone {
      width: 80%;
      height: 200px;
      border: 2px dotted orange;
      text-align: center;
    }

    .dropzone:hover {
      background-color: antiquewhite;
    }

    progress {
      width: 80%;
    }

    img {
      max-width: 80%;
    }
  `]
})
export class FileUploadComponent {
  // 0. Eventemitters to notify parent component that a file is uploaded
  @Output() uploaded = new EventEmitter<string>();

  // 1. The Task gives us access to the main upload task and enables to
  // pause, stop, resume uploading the file(s)and percentage changes, for progress bar display.
  task: AngularFireUploadTask;

  // 2. progress monitoring
  percentage: Observable<number>;

  // 3. snapshot of the process
  snapshot: Observable<any>;

  // 4. the generated download url
  downloadUrl: Observable<string>;

  // 5. a boolean, so we can change/toggle some CSS classes
  isHovering: boolean;

  // 6. Inject AngularFireStorage here to be used in the upload-method.
  constructor(private afStorage: AngularFireStorage) {
  }

  // 7. If an event comes in from the directive
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  // 8. kickof the entire upload progress. It starts the upload once the drop event fires.
  // The parameter is a list of files, received from the directive (/shared/directives/drop-zone.directive.ts
  startUpload(event: FileList) {
    // get the first file from the list. If you want to upload
    // multiple files, iterate over the array that comes in.
    const file = event.item(0);

    // 8a. some clientsided validation
    if (file.type.split('/')[0] !== 'image') {
      console.error('Unsupported file type :: Sorry, only images are allowed! ');
      // Also set up some backend Firestore validation rules! Like
      //  allow write : if request.resource.contentType.matches('image/.*');
    }

    // 8b. Tell Firebase storage where to save it. It doesn't generate a unique ID like Cloud Firestore does,
    // so you need to create an ID of of your own, or ad som random data to the filename.
    const path = `${environment.image_endpoint}/${new Date().getTime()}_${file.name}`;

    // 8c. You CAN save optional metadata for every file you upload. In this case we only
    // send the creator and name of the app. But you can add any metadata you want.
    const customMetadata = {
      creator: 'Peter Kassenaar',
      app: 'Cities Firestor App'
    };

    // 8d. The main tast, upload the file and send the metadata.
    // It immediately starts the upload process. No need to call .subscribe(), as you
    // normally would with an observable.
    this.task = this.afStorage.upload(path, file, {customMetadata});

    // 8e. Progress the monitoring by listening to the observables
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    // 8f. Get the generated downloadUrl for the file
    const ref = this.afStorage.ref(path);
    this.task.then(data => {
      this.downloadUrl = ref.getDownloadURL();
      // 8f-1. emit the uploaded file to the parent component
      this.downloadUrl.pipe()
        .subscribe(url => {
          console.log(url);
          this.uploaded.emit(url);
        });
    });

  }

  // 9. Determine if the upload tast is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
