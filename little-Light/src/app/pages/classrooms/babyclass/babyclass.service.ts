import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BabyclassService {

  private _ctaUrl: string = "/assets/data/pages/classrooms/babyclass/cta.json";  

  constructor(private http: HttpClient) {}
  getCtaData() {
    return this.http.get(this._ctaUrl);
  }
}
