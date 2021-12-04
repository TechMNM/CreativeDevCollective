import { Component, OnInit } from '@angular/core';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  ctaData;
  overviewData;
  overviewimagesData;

title01 = 'Welcome';
title02 = 'to Little Light Academy'

  constructor(private myService: HomePageService) { }

  ngOnInit(): void {
    this.myService.getCtaData()
    .subscribe(res => this.ctaData = res);

    this.myService.getOverviewData()
    .subscribe(res => this.overviewData = res);

    this.myService.getImagesData()
    .subscribe(res => this.overviewimagesData = res);
  }

}
