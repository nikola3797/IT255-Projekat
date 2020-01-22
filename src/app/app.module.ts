import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { KicksComponent } from './kicks/kicks.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrederSuccessComponent } from './oreder-success/oreder-success.component';
import { MyKicksComponent } from './my-kicks/my-kicks.component';
import { AdminKicksComponent } from './admin/admin-kicks/admin-kicks.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    KicksComponent,
    CartComponent,
    CheckoutComponent,
    OrederSuccessComponent,
    MyKicksComponent,
    AdminKicksComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'kicks', component: KicksComponent},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'oreder-success', component: OrederSuccessComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin/kicks', component: AdminKicksComponent},
      {path: 'admin/orders', component: AdminOrdersComponent},
      {path: 'my/kicks', component: MyKicksComponent},





    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
