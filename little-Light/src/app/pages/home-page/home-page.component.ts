import { Component, OnInit } from '@angular/core';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ctaData;
  overviewData;

  constructor(private myService: HomePageService) { }

  ngOnInit(): void {
    this.myService.getCtaData()
    .subscribe(res => this.ctaData = res);
  }

}
