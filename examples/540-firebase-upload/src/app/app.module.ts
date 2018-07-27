import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';

// components
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AddComponent} from './add/add.component';
import {UpdateComponent} from './update/update.component';

// Directives an component for File Upload
import {FileUploadComponent} from './file-upload/file-upload.component';
import {DropZoneDirective} from './shared/directives/drop-zone.directive';

// firebase stuff
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';

// Router stuff
import {RouterModule, Routes} from '@angular/router';

// Initialize Routes
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'update/:id', component: UpdateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    UpdateComponent,
    DropZoneDirective,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
