import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-overview',
  templateUrl: './registration-overview.component.html',
  styleUrls: ['./registration-overview.component.css']
})
export class RegistrationOverviewComponent implements OnInit {

  title01 = 'APPLY';
  title02 = 'Today'
  constructor() { }

  ngOnInit(): void {
  }

}
