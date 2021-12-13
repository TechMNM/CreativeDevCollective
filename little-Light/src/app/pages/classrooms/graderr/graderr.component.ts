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
slide01 = '/assets/images/gallery/gallery15.jpg';
slide02 = '/assets/images/gallery/gallery14.jpg';
slide03 = '/assets/images/gallery/gallery1.jpg';

title01 = 'Grade RR';
title02 = '- Donald Duck (5yr)'

imageObject: Array<object> = [{
  image: '/assets/images/gallery/gallery1.jpg',
  thumbImage: '/assets/images/gallery/gallery1.jpg'
}, {
  image: '/assets/images/gallery/gallery2.jpg',
  thumbImage: '/assets/images/gallery/gallery2.jpg'
}, {
  image: '/assets/images/gallery/gallery18.jpg',
  thumbImage: '/assets/images/gallery/gallery18.jpg'
}, {
  image: '/assets/images/gallery/gallery14.jpg',
  thumbImage: '/assets/images/gallery/gallery14.jpg'
}, {
  image: '/assets/images/gallery/gallery13.jpg',
  thumbImage: '/assets/images/gallery/gallery13.jpg'
}, {
  image: '/assets/images/gallery/gallery12.jpg',
  thumbImage: '/assets/images/gallery/gallery12.jpg'
}, {
  image: '/assets/images/gallery/gallery28.jpg',
  thumbImage: '/assets/images/gallery/gallery28.jpg'
},{
  image: '/assets/images/gallery/gallery11.jpg',
  thumbImage: '/assets/images/gallery/gallery11.jpg'
}, {
  image: '/assets/images/gallery/gallery17.jpg',
  thumbImage: '/assets/images/gallery/gallery17.jpg'
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
