import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/mediaservice.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public mediaService: MediaService, public router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('localToken') !== null) {
      this.mediaService.getUserData().subscribe(response => {
        this.router.navigate(['front']);
      }, (error: HttpErrorResponse) => {
        console.log(error.error.message);
      });
    }
  }
}
