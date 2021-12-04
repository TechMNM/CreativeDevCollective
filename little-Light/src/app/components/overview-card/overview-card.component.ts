import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent implements OnInit {
  title01 = 'Welcome';
  title02 = 'To Light Academy'

  @Input()
  overviewCard: any[];


  constructor() { }

  ngOnInit(): void {
  }

}
