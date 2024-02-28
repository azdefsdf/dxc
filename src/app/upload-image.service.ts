import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  private apiUrl = 'http://192.168.217.132:8080/data';

  constructor(private http: HttpClient) { }

  uploadImages(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }
}
