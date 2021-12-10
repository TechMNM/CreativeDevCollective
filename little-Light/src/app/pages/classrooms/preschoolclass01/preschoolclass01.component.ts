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
slide01 = '/assets/images/gallery/gallery16.jpg';
slide02 = '/assets/images/gallery/gallery17.jpg';
slide03 = '/assets/images/gallery/gallery18.jpg';

title01 = 'PreSchool Class 1';
title02 = '- Smurf (3yr)'

imageObject: Array<object> = [{
  image: '/assets/images/gallery/gallery18.jpg',
  thumbImage: '/assets/images/gallery/gallery18.jpg'
}, {
  image: '/assets/images/gallery/gallery17.jpg',
  thumbImage: '/assets/images/gallery/gallery17.jpg'
}, {
  image: '/assets/images/gallery/gallery16.jpg',
  thumbImage: '/assets/images/gallery/gallery16.jpg'
}, {
  image: '/assets/images/gallery/gallery15.jpg',
  thumbImage: '/assets/images/gallery/gallery15.jpg'
}, {
  image: '/assets/images/gallery/gallery16.jpg',
  thumbImage: '/assets/images/gallery/gallery16.jpg'
}, {
  image: '/assets/images/gallery/gallery15.jpg',
  thumbImage: '/assets/images/gallery/gallery15.jpg'
},
{
  image: '/assets/images/gallery/gallery27.jpg',
  thumbImage: '/assets/images/gallery/gallery27.jpg'
}, {
  image: '/assets/images/gallery/gallery14.jpg',
  thumbImage: '/assets/images/gallery/gallery14.jpg'
}, {
  image: '/assets/images/gallery/gallery13.jpg',
  thumbImage: '/assets/images/gallery/gallery14.jpg'
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
