import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraderrService {

  private _ctaUrl: string = "/assets/data/pages/classrooms/graderr/cta.json";
  private _overviewUrl: string ="/assets/data/pages/classrooms/graderr/overview.json";

defaultImage = '/assets/images/image-block.png';
slide01 = '/assets/images/slide1.jpg';
slide02 = '/assets/images/cta-image.jpg';
slide03 = '/assets/images/slide1.jpg';

title01 = 'Grade RR';
title02 = '- Kids 6 Years'

  constructor(private http: HttpClient) { }
  getCtaData() {
    return this.http.get(this._ctaUrl);
  }

  getOverviewData() {
    return this.http.get(this._overviewUrl);
  }
}
