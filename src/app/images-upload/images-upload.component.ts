import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadImageService } from '../upload-image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.css']
})
export class ImagesUploadComponent {

  @Output() dataLoaded: EventEmitter<any> = new EventEmitter();
  jsonData: any;

  loading = false;
  responseData: any;
  selectedFiles: File[] = [];
  currentStep: string = 'Uploading images';

  constructor(
    private http: HttpClient, 
    private uploadService: UploadImageService,
    private router: Router
    ) {}

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(files[i]);
    }
  }

  onSubmit() {
    this.loading = true;
    const formData = new FormData();
    for (const file of this.selectedFiles) {
      formData.append('images', file);
    }
    formData.append('projectPath', 'SampleProjects/Hello/SampleProject/SampleProject.fcproj');
    this.uploadService.uploadImages(formData).subscribe(
      response => {
        this.loading = false;
        this.responseData = response;
        console.log(JSON.stringify(this.responseData));
        this.dataLoaded.emit(this.responseData);

        this.router.navigate(['/data-display']);
      },
      error => {
        this.loading = false;
        console.error('Error:', error);
        // Handle errors here
      }
    );
  }

  onDataLoaded(event: any) {
    // Handle the event data here if needed
    console.log('Data loaded:', event); // This will log the emitted event data to the console

  }
}
