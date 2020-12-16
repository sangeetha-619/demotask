import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-forums',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
