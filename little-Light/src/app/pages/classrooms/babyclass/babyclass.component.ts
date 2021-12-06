import { Component, OnInit } from '@angular/core';
import { BabyclassService } from './babyclass.service';

@Component({
  selector: 'app-babyclass',
  templateUrl: './babyclass.component.html',
  styleUrls: ['./babyclass.component.scss']
})
export class BabyclassComponent implements OnInit {
  ctaData;
  overviewData;

defaultImage = '/assets/images/image-block.png';
slide01 = '/assets/images/gallery/gallery10.jpg';
slide02 = '/assets/images/gallery/gallery11.jpg';
slide03 = '/assets/images/gallery/gallery12.jpg';

title01 = 'Baby Class';
title02 = '- Newborn to 12 months'

  imageObject: Array<object> = [{
    image: '/assets/images/gallery/gallery7.jpg',
    thumbImage: '/assets/images/gallery/gallery7.jpg'
  }, {
    image: '/assets/images/gallery/gallery8.jpg',
    thumbImage: '/assets/images/gallery/gallery8.jpg'
  }, {
    image: '/assets/images/gallery/gallery9.jpg',
    thumbImage: '/assets/images/gallery/gallery9.jpg'
  }, {
    image: '/assets/images/gallery/gallery10.jpg',
    thumbImage: '/assets/images/gallery/gallery10.jpg'
  }, {
    image: '/assets/images/gallery/gallery11.jpg',
    thumbImage: '/assets/images/gallery/gallery11.jpg'
  }, {
    image: '/assets/images/gallery/gallery12.jpg',
    thumbImage: '/assets/images/gallery/gallery12.jpg'
  }, {
    image: '/assets/images/gallery/gallery13.jpg',
    thumbImage: '/assets/images/gallery/gallery13.jpg'
  }, {
    image: '/assets/images/gallery/gallery14.jpg',
    thumbImage: '/assets/images/gallery/gallery14.jpg'
  },
  {
    image: '/assets/images/gallery/gallery15.jpg',
    thumbImage: '/assets/images/gallery/gallery15.jpg'
  }
  ];

  constructor(private myService: BabyclassService) { }

  ngOnInit(): void {

    this.myService.getOverviewData()
    .subscribe(res => this.overviewData = res);

    this.myService.getCtaData()
    .subscribe(res => this.ctaData = res);

  }

}
