import { Component, OnInit } from '@angular/core';
import { BabyclassService } from './babyclass.service';

@Component({
  selector: 'app-babyclass',
  templateUrl: './babyclass.component.html',
  styleUrls: ['./babyclass.component.css']
})
export class BabyclassComponent implements OnInit {
  ctaData;


  constructor(private myService: BabyclassService) { }

  ngOnInit(): void {
    this.myService.getCtaData()
    .subscribe(res => this.ctaData = res);
  }

}
