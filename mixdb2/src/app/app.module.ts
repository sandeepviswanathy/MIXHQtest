import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; //TODO WHY THE FUCK
import { RouterModule, Routes } from '@angular/router';

import {HTTP_INTERCEPTORS} from '@angular/common/http'; //for interceptor headers ???
import {AuthInterceptor} from './auth.interceptor'; //imports the httpInterceptor


import { AppComponent } from './app.component';

import { ManagementLoginComponent } from './management-login/management-login.component'; //actual login screen
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { ManagementMenuComponent } from './management-menu/management-menu.component'; //actual options


//once router-outlet is called in app.component.html, comes here to find default opening route which is login form
const appRoutes: Routes = [
	//THIS IS ALSO IMPORTANT, ADD PATH INFO HERE FOR EACH NEW COMPONENT CREATED
	{
		path: '',
		component: ManagementLoginComponent
	},
	{
		path: 'ManagementMenu',
		canActivate: [AuthGuard],
		component: ManagementMenuComponent
	}
]
@NgModule({
  declarations: [
    AppComponent,
		ManagementLoginComponent,
		ManagementMenuComponent
  ],
  imports: [
		RouterModule.forRoot(appRoutes),
    BrowserModule,
		HttpClientModule
  ],
  providers: [UserService, AuthGuard, {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true,}],
  bootstrap: [AppComponent]
})
export class AppModule { }
