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
slide01 = '/assets/images/gallery/gallery9.jpg';
slide02 = '/assets/images/gallery/gallery5.jpg';
slide03 = '/assets/images/gallery/gallery16.jpg';

title01 = 'Toddler Class';
title02 = '- Garfield (1yr-2yr)'

imageObject: Array<object> = [{
  image: '/assets/images/gallery/gallery16.jpg',
  thumbImage: '/assets/images/gallery/gallery16.jpg'
}, {
  image: '/assets/images/gallery/gallery17.jpg',
  thumbImage: '/assets/images/gallery/gallery17.jpg'
}, {
  image: '/assets/images/gallery/gallery18.jpg',
  thumbImage: '/assets/images/gallery/gallery18.jpg'
}, {
  image: '/assets/images/gallery/gallery19.jpg',
  thumbImage: '/assets/images/gallery/gallery19.jpg'
}, {
  image: '/assets/images/gallery/gallery20.jpg',
  thumbImage: '/assets/images/gallery/gallery20.jpg'
}, {
  image: '/assets/images/gallery/gallery21.jpg',
  thumbImage: '/assets/images/gallery/gallery21.jpg'
}, {
  image: '/assets/images/gallery/gallery22.jpg',
  thumbImage: '/assets/images/gallery/gallery22.jpg'
}, {
  image: '/assets/images/gallery/gallery15.jpg',
  thumbImage: '/assets/images/gallery/gallery15.jpg'
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
