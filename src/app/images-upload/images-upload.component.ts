import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../upload-image.service';

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrl: './images-upload.component.css'
})
export class ImagesUploadComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }
}
