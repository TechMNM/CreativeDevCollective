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
slide01 = '/assets/images/gallery/gallery1.jpg';
slide02 = '/assets/images/gallery/gallery2.jpg';
slide03 = '/assets/images/gallery/gallery3.jpg';

title01 = 'Preschool Class 2';
title02 = '- Goofey (4yr)'

imageObject: Array<object> = [{
  image: '/assets/images/gallery/gallery9.jpg',
  thumbImage: '/assets/images/gallery/gallery9.jpg'
}, {
  image: '/assets/images/gallery/gallery10.jpg',
  thumbImage: '/assets/images/gallery/gallery10.jpg'
}, {
  image: '/assets/images/gallery/gallery11.jpg',
  thumbImage: '/assets/images/gallery/gallery11.jpg'
}, {
  image: '/assets/images/gallery/gallery1.jpg',
  thumbImage: '/assets/images/gallery/gallery1.jpg'
}, {
  image: '/assets/images/gallery/gallery3.jpg',
  thumbImage: '/assets/images/gallery/gallery3.jpg'
}, {
  image: '/assets/images/gallery/gallery12.jpg',
  thumbImage: '/assets/images/gallery/gallery12.jpg'
}, {
  image: '/assets/images/gallery/gallery13.jpg',
  thumbImage: '/assets/images/gallery/gallery13.jpg'
}, {
  image: '/assets/images/gallery/gallery14.jpg',
  thumbImage: '/assets/images/gallery/gallery14.jpg'
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
