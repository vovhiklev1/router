import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {DashComponent} from './dash/dash.component';
import {HotelComponent} from './hotel/hotel.component';
import {AuthService} from "./auth.service";
import {LoginComponent} from './login/login.component';
import {AuthChildService} from "./auth-child.service";

const routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: ':role',
    component: DashComponent,
    canActivate: [AuthService],
    canActivateChild: [AuthChildService],
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {
        path: 'login',
        component: HotelComponent
      }
      , {
        path: 'hotel',
        component: HotelComponent
      }
    ]
  }];

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    HotelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true, enableTracing: true})
  ],
  providers: [AuthService, AuthChildService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
