import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private _ctaUrl: string = "/assets/data/pages/home-page/cta.json";


  constructor(private http: HttpClient) {}
    getCtaData() {
      return this.http.get(this._ctaUrl);
    }

   
}
