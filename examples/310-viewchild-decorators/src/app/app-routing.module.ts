import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewChildComponent} from "./view-child/view-child.component";
import {ViewChildrenComponent} from "./view-children/view-children.component";
import {HostListenerComponent} from "./host-listener/host-listener.component";
import {HostBindingComponent} from "./host-binding/host-binding.component";

const routes: Routes = [
  {path: '', redirectTo: 'viewchild', pathMatch: 'full'},
  {path: 'viewchild', component: ViewChildComponent},
  {path: 'viewchildren', component: ViewChildrenComponent},
  {path: 'hostlistener', component: HostListenerComponent},
  {path: 'hostbinding', component: HostBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
