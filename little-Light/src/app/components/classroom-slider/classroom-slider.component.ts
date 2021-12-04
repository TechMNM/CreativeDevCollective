import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-slider',
  templateUrl: './classroom-slider.component.html',
  styleUrls: ['./classroom-slider.component.css']
})
export class ClassroomSliderComponent implements OnInit {

  imageObject: Array<object> = [{
    image: '/assets/images/services/service-04.jpg',
    thumbImage: '/assets/images/services/thumb/service-04-thumb.png',
    alt: 'alt of image',
    title: 'Metal laser cutting'
  }, {
    image: '/assets/images/gallery/gallery_2.jpg',
    thumbImage: '/assets/images/gallery/gallery_2.jpg',
    title: 'Idea 02',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery_3.jpg',
    thumbImage: '/assets/images/gallery/gallery_3.jpg',
    title: 'Idea 03',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery_4.png',
    thumbImage: '/assets/images/gallery/gallery_4.png',
    title: 'Idea 04',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery_5.jpg',
    thumbImage: '/assets/images/gallery/gallery_5.jpg',
    title: 'Idea 05',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery_6.jpg',
    thumbImage: '/assets/images/gallery/gallery_6.jpg',
    title: 'Idea 06',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery_7.jpg',
    thumbImage: '/assets/images/gallery/gallery_7.jpg',
    title: 'Idea 07',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery_8.png',
    thumbImage: '/assets/images/gallery/gallery_8.png',
    title: 'Idea 08',
    alt: 'Image alt'
  },{
    image: '/assets/images/gallery/gallery_9.jpg',
    thumbImage: '/assets/images/gallery/gallery_9.jpg',
    title: 'Idea 09',
    alt: 'Image alt'
  },{
    image: '/assets/images/gallery/gallery_10.jpg',
    thumbImage: '/assets/images/gallery/gallery_10.jpg',
    title: 'Idea 10',
    alt: 'Image alt'
  },{
    image: '/assets/images/gallery/gallery_11.jpg',
    thumbImage: '/assets/images/gallery/gallery_11.jpg',
    title: 'Idea 11',
    alt: 'Image alt'
  }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }


}
