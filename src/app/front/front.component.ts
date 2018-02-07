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

  mediaArray: any;

  constructor(public mediaService: MediaService, private router: Router) { }

  ngOnInit() {
    this.mediaService.getUserData().subscribe(response => {
      console.log('Welcome ' + response['username']);
      this.displayImgs();
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.router.navigate(['login']);
    });
  }

  displayImgs() {
    this.mediaService.getNewFiles().subscribe(response => {
        console.log(response);
        this.mediaArray = response;
        this.mediaArray.map( media => {
          const temp = media.filename.split('.');
          const thumbName = temp[0] + '-tn320.png';
          media.thumbnail = thumbName;
        });
        console.log(this.mediaArray);
      });
  }
}
