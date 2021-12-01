import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BabyclassService {

  private _ctaUrl: string = "/assets/data/pages/home-page/cta.json";
  private _overviewUrl: string ="/assets/data/pages/classrooms/babyclass/overview.json";

  constructor(private http: HttpClient) { }
  getCtaData() {
    return this.http.get(this._ctaUrl);
  }

  getOverviewData() {
    return this.http.get(this._overviewUrl);
  }
}
