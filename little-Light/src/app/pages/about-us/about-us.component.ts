import { Component, OnInit } from '@angular/core';
import { AboutService} from './about.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  title01 = 'Who Are';
  title02 = 'We?' 

overviewData;
ctaData;

  constructor(private myService:  AboutService) { }

  ngOnInit(): void {
    this.myService.getCtaData()
    .subscribe(res => this.ctaData = res);

    this.myService.getOverviewData()
    .subscribe(res => this.overviewData = res);
  }

}
