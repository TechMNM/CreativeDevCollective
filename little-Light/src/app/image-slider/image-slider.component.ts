import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class HomePageSliderComponent implements OnInit {

  defaultImage = '/assets/images/image-block.png';
  slide01 = '/assets/images/gallery/gallery18.jpg';
  slide02 = '/assets/images/gallery/gallery5.jpg';
  slide03 = '/assets/images/gallery/gallery2.jpg';

  constructor() {

   }

  ngOnInit(): void {}

  // homeSlider = {items: 1, dots: true , nav: true };

}
