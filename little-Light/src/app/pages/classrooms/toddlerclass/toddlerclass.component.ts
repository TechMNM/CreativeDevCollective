import { Component, OnInit } from '@angular/core';
import { ToddlerclassService } from './toddlerclass.service'

@Component({
  selector: 'app-toddlerclass',
  templateUrl: './toddlerclass.component.html',
  styleUrls: ['./toddlerclass.component.scss']
})
export class ToddlerclassComponent implements OnInit {
  overviewData;
  ctaData;

defaultImage = '/assets/images/image-block.png';
slide01 = '/assets/images/slide1.jpg';
slide02 = '/assets/images/cta-image.jpg';
slide03 = '/assets/images/slide1.jpg';

title01 = 'Toddler Class';
title02 = '- Garfield (1yr-2yr)'

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


  constructor(private myService: ToddlerclassService) { }

  ngOnInit(): void {
    this.myService.getCtaData()
    .subscribe(res => this.ctaData = res);

    this.myService.getOverviewData()
    .subscribe(res => this.overviewData = res);
  }

}
