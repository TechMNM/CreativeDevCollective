import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private _ctaUrl: string = "/assets/data/pages/home-page/cta.json";
  private _overviewUrl: string ="/assets/data/pages/home-page/overview.json";
  private _imagesUrl: string ="/assets/data/pages/home-page/images.json"


  constructor(private http: HttpClient) {}
    getCtaData() {
      return this.http.get(this._ctaUrl);
    }

    getOverviewData() {
      return this.http.get(this._overviewUrl);
    }

    getImagesData() {
      return this.http.get(this._imagesUrl)
    }
}
