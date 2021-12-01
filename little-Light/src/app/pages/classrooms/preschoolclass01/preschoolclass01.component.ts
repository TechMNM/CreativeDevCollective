import { Component, OnInit } from '@angular/core';
import { Preschoolclass01Service } from './preschoolclass01.service';

@Component({
  selector: 'app-preschoolclass01',
  templateUrl: './preschoolclass01.component.html',
  styleUrls: ['./preschoolclass01.component.scss']
})
export class Preschoolclass01Component implements OnInit {

overviewData;
ctaData;

defaultImage = '/assets/images/image-block.png';
slide01 = '/assets/images/slide1.jpg';
slide02 = '/assets/images/cta-image.jpg';
slide03 = '/assets/images/slide1.jpg';

title01 = 'PreSchool Class 1';
title02 = '- Smurf (3yr)'

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

  constructor(private myService: Preschoolclass01Service) { }

  ngOnInit(): void {
    this.myService.getOverviewData()
    .subscribe(res => this.overviewData = res);

    this.myService.getCtaData()
    .subscribe(res => this.ctaData = res);
  }

}
