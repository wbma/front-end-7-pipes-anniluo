import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/mediaservice.service';
import { Media } from '../interfaces/media';
import {HttpErrorResponse, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File;
  media: Media = {
    title: '',
    description: ''
  };

  constructor(public mediaService: MediaService) { }

  ngOnInit() {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  upload() {
    console.log(this.media);
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    this.mediaService.upload(formData).subscribe(response => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }
}
