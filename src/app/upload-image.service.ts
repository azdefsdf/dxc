import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  private baseURL = 'http://192.168.217.132:8080/data';
  constructor(private httpclient: HttpClient) { }


  getDocumentData(): Observable<any> {

    return this.httpclient.get<any>(`${this.baseURL}`);
  
}
}
