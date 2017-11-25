import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/';
//import { UserService } from '../user.service'; //TODO actiavte late

//HttpClientModule
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-managementlogin',
  templateUrl: './managementlogin.component.html',
  styleUrls: ['./managementlogin.component.css']
})
export class ManagementloginComponent implements OnInit {

	//constructor() { }

	//constructor(private router: Router, private user:UserService, private http: HttpClient) { }

	constructor(private router: Router, private http: HttpClient) { }

	ngOnInit() {
		let headers = new HttpHeaders({ // this is where we'd want to dynamically input the login details from the page/form
      'login-type':'1',
      'scan-data':'123456',
      'user-email':'',
      'user-pass':''
    });
    let url = 'http://45.79.179.223:3000/api/v1/login';
    this.http.get<UserResponse>(url,{headers:headers}).subscribe(
      data => {
        console.log("Session: " + data['session_id']); // don't know how to step into the json object
        console.log("Status: " + data.status);
        console.log("Message: " + data.message);
        console.log(data);
        console.log({headers});
        console.log(data['data']); // this has the session id we want to store for future api requests
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
          console.log({headers});
        }
      }
    );

		interface UserResponse {
		  session_id: string;
		  status: string;
		  message: string;
		}
  }

	// loginUser(e) {
  //
	// 	// why is it e.target??
	// 	var username = e.target.elements[0].value;
	// 	var password = e.target.elements[1].value;
	// 	console.log(username, password);
	// 	//everything below here is manual comparison
	// 	//this will eventually need to be changed to an http call to db to authenticate user
	// 	if(username == 'admin' && password == 'admin') {
	// 		this.user.setUserLoggedIn();
	// 		this.router.navigate(['dashboard']);
	// 	}
	// }
  //
	// swipeinUser(e) {
  //
	// 	// why is it e.target??
	// 	var swipeCode = e.target.elements[0].value;
	// 	console.log(swipeCode);
	// 	//everything below here is manual comparison
	// 	//this will eventually need to be changed to an http call to db to authenticate user
	// 	if(swipeCode == '%MASON?;5890242000011097?') {
	// 		this.user.setUserLoggedIn();
	// 		this.router.navigate(['dashboard']);
	// 	}
	// }

}
