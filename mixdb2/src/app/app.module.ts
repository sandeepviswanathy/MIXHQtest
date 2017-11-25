import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; //TODO WHY THE FUCK
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ManagementloginComponent } from './managementlogin/managementlogin.component';


//once router-outlet is called in app.component.html, comes here to find default opening route which is login form
const appRoutes: Routes = [
	//THIS IS ALSO IMPORTANT, ADD PATH INFO HERE FOR EACH NEW COMPONENT CREATED
	{
		path: '',
		component: ManagementloginComponent
	},
]
@NgModule({
  declarations: [
    AppComponent,
		ManagementloginComponent
  ],
  imports: [
		RouterModule.forRoot(appRoutes),
    BrowserModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
