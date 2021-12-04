import { Component, OnInit } from '@angular/core';
import { GraderrService } from './graderr.service';

@Component({
  selector: 'app-graderr',
  templateUrl: './graderr.component.html',
  styleUrls: ['./graderr.component.scss']
})
export class GraderrComponent implements OnInit {
  overviewData;
  ctaData;

defaultImage = '/assets/images/image-block.png';
slide01 = '/assets/images/slide1.jpg';
slide02 = '/assets/images/cta-image.jpg';
slide03 = '/assets/images/slide1.jpg';

title01 = 'Grade RR';
title02 = '- Donald Duck (5yr)'

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

  constructor(private myService: GraderrService) { }

  ngOnInit(): void {
    this.myService.getOverviewData()
    .subscribe(res => this.overviewData = res);

    this.myService.getCtaData()
    .subscribe(res => this.ctaData = res);
  }

}
