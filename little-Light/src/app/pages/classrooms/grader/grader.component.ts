import { Component, OnInit } from '@angular/core';
import { GraderService } from './grader.service';

@Component({
  selector: 'app-grader',
  templateUrl: './grader.component.html',
  styleUrls: ['./grader.component.scss']
})
export class GraderComponent implements OnInit {

overviewData;
ctaData;

defaultImage = '/assets/images/image-block.png';
slide01 = '/assets/images/slide1.jpg';
slide02 = '/assets/images/cta-image.jpg';
slide03 = '/assets/images/slide1.jpg';

title01 = 'Grade R';
title02 = '- Kids 6 Years'

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

constructor(private myService: GraderService) { }

ngOnInit(): void {
  this.myService.getOverviewData()
  .subscribe(res => this.overviewData = res);

  this.myService.getCtaData()
  .subscribe(res => this.ctaData = res);
}

}
