import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  getJsonData() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://192.168.217.132:8080/data';

  constructor(private http: HttpClient) { }

  uploadImages(formData:  FormData) :Observable<any>{
    return this.http.post(this.apiUrl, formData);
  }
}
