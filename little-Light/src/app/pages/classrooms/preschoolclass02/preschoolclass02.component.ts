import { Component, OnInit } from '@angular/core';
import {Preschoolclass02Service} from './preschoolclass02.service';

@Component({
  selector: 'app-preschoolclass02',
  templateUrl: './preschoolclass02.component.html',
  styleUrls: ['./preschoolclass02.component.scss']
})
export class Preschoolclass02Component implements OnInit {
  overviewData;
  ctaData;

defaultImage = '/assets/images/image-block.png';
slide01 = '/assets/images/slide1.jpg';
slide02 = '/assets/images/cta-image.jpg';
slide03 = '/assets/images/slide1.jpg';

title01 = 'Preschool Class 2';
title02 = '- Goofey (4yr)'

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

  constructor(private myService: Preschoolclass02Service) { }

  ngOnInit(): void {
    this.myService.getOverviewData()
    .subscribe(res => this.overviewData = res);

    this.myService.getCtaData()
    .subscribe(res => this.ctaData = res);
  }

}
