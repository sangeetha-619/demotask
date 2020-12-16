import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-localization',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
