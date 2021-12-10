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
slide01 = '/assets/images/gallery/gallery17.jpg';
slide02 = '/assets/images/gallery/gallery18.jpg';
slide03 = '/assets/images/gallery/gallery2.jpg';

title01 = 'Grade R';
title02 = '- Kids 6 Years'

imageObject: Array<object> = [{
  image: '/assets/images/gallery/gallery22.jpg',
  thumbImage: '/assets/images/gallery/gallery22.jpg'
}, {
  image: '/assets/images/gallery/gallery21.jpg',
  thumbImage: '/assets/images/gallery/gallery21.jpg'
}, {
  image: '/assets/images/gallery/gallery20.jpg',
  thumbImage: '/assets/images/gallery/gallery20.jpg'
},{
  image: '/assets/images/gallery/gallery23.jpg',
  thumbImage: '/assets/images/gallery/gallery23.jpg'
}, {
  image: '/assets/images/gallery/gallery19.jpg',
  thumbImage: '/assets/images/gallery/gallery19.jpg'
}, {
  image: '/assets/images/gallery/galleryt18.jpg',
  thumbImage: '/assets/images/gallery/gallery18.jpg'
},{
  image: '/assets/images/gallery/gallery24.jpg',
  thumbImage: '/assets/images/gallery/gallery24.jpg'
}, {
  image: '/assets/images/gallery/gallery17.jpg',
  thumbImage: '/assets/images/gallery/gallery17.jpg'
}, 
{
  image: '/assets/images/gallery/gallery26.jpg',
  thumbImage: '/assets/images/gallery/gallery26.jpg'
},{
  image: '/assets/images/gallery/gallery16.jpg',
  thumbImage: '/assets/images/gallery/gallery16.jpg'
}, {
  image: '/assets/images/gallery/gallery15.jpg',
  thumbImage: '/assets/images/gallery/gallery15.jpg'
},{
  image: '/assets/images/gallery/gallery25.jpg',
  thumbImage: '/assets/images/gallery/gallery25.jpg'
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
