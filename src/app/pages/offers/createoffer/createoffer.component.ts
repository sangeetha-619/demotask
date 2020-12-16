import { Component, OnInit } from '@angular/core';

declare var offers:any;
@Component({
  selector: 'app-createoffer',
  templateUrl: './createoffer.component.html',
  styleUrls: ['./createoffer.component.scss']
})
export class CreateofferComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
    new offers();
  }
}
