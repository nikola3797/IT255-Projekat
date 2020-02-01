import { EditComponent } from './kicks/edit/edit.component';
import { DetailComponent } from './kicks/detail/detail.component';
import { StartComponent } from './kicks/start/start.component';
import { SellingListComponent } from './selling-list/selling-list.component';
import { KicksComponent } from './kicks/kicks.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/kicks', pathMatch: 'full' },
  { path: 'kicks', component: KicksComponent, children: [
      { path: '', component: StartComponent },
      { path: 'new', component: EditComponent },
      { path: ':id', component: DetailComponent },
      { path: ':id/edit', component: EditComponent },
    ]},
  { path: 'selling-list', component: SellingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {

}
