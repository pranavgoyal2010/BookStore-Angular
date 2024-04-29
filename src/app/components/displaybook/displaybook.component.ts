import { Component, Input, OnInit } from '@angular/core';
import { Console } from 'console';
import { BookObj } from 'src/assets/type';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {

  @Input() book!:BookObj;
  constructor() { }

  ngOnInit(): void {
    console.log("received book", this.book);
  }

}
