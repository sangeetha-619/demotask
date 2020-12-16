import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template:  `<router-outlet></router-outlet>`,
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
