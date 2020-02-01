import { KicksComponent } from './kicks/kicks.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { DetailComponent } from './kicks/detail/detail.component';
import { EditComponent } from './kicks/edit/edit.component';
import { ListComponent } from './kicks/list/list.component';
import { StartComponent } from './kicks/start/start.component';
import { ItemComponent } from './kicks/list/item/item.component';
import {DropdownDirective} from './dropdown.directive';

import {RoutingModule} from './routing-model'

import { SellingListService } from './selling-list/selling-list.service';
import { SellingListComponent } from './selling-list/selling-list.component';
import {SellingListEditComponent} from './selling-list/edit/edit.component';
import {KicksService} from './kicks.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KicksComponent,
    DetailComponent,
    EditComponent,
    ListComponent,
    StartComponent,
    SellingListComponent,
    DropdownDirective,
    ItemComponent,
    SellingListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [KicksService, SellingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
