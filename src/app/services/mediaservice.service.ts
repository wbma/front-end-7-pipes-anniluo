import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class MediaService {

  username: string;
  password: string;

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  status: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  register(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  login() {
    console.log('uname: ' + this.username);
    console.log('pwd: ' + this.password);

    const body = {
      username: this.username,
      password: this.password
    };

    // optional, application/json is default
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    this.http.post(this.apiUrl + '/login', body, settings).subscribe(response => {
      // "correct" way of using response is creating an interface, brackets are lazy
      console.log(response['token']);
      localStorage.setItem('localToken', response['token']);
      this.router.navigate(['front']);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
      this.status = error.error.message;
    });
  }

  getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('localToken'))
    };
    return this.http.get(this.apiUrl + '/users/user', settings);
  }
}

