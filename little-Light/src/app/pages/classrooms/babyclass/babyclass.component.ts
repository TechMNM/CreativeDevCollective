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
slide01 = '/assets/images/slide1.jpg';
slide02 = '/assets/images/cta-image.jpg';
slide03 = '/assets/images/slide1.jpg';

title01 = 'Baby Class';
title02 = '- Newborn to 12 months'

  imageObject: Array<object> = [{
    image: '/assets/images/gallery/gallerytest.jpg',
    thumbImage: '/assets/images/gallery/gallerytest.jpg'
  }, {
    image: '/assets/images/gallery/gallerytest.jpg',
    thumbImage: '/assets/images/gallery/gallerytest.jpg'
  }, {
    image: '/assets/images/gallery/gallerytest.jpg',
    thumbImage: '/assets/images/gallery/gallerytest.jpg'
  }, {
    image: '/assets/images/gallery/gallerytest.jpg',
    thumbImage: '/assets/images/gallery/gallerytest.jpg'
  }, {
    image: '/assets/images/gallery/gallerytest.jpg',
    thumbImage: '/assets/images/gallery/gallerytest.jpg'
  }, {
    image: '/assets/images/gallery/gallerytest.jpg',
    thumbImage: '/assets/images/gallery/gallerytest.jpg'
  }, {
    image: '/assets/images/gallery/gallerytest.jpg',
    thumbImage: '/assets/images/gallery/gallerytest.jpg'
  }, {
    image: '/assets/images/gallery/gallerytest.jpg',
    thumbImage: '/assets/images/gallery/gallerytest.jpg'
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
