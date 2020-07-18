import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url: string = "http://localhost:5000/upload/";

  constructor(private http: HttpClient) { }

  rotateImage(data): Observable<any> {
    return this.http.post<any>(this.url+'rotate/', data);
  }

  changeContrast(data): Observable<any> {
    return this.http.post<any>(this.url+'contrast/', data);
  }

  rotateAndContrast(data): Observable<any> {
    return this.http.post(this.url, data);
  }
}
