import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-cta',
  templateUrl: './register-cta.component.html',
  styleUrls: ['./register-cta.component.scss']
})
export class RegisterCtaComponent implements OnInit {

  @Input()
  ctaData: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
