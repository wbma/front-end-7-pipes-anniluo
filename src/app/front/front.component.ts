import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MediaService } from '../services/mediaservice.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor(private mediaService: MediaService, private router: Router) { }

  ngOnInit() {
    this.mediaService.getUserData().subscribe(response => {
      console.log('Welcome ' + response['username']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.router.navigate(['login']);
    });
  }
}
