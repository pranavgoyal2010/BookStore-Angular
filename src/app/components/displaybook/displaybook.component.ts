import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Console } from 'console';
import { BookObj } from 'src/assets/type';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {

  @Input() book!:BookObj;
  @Output() bookClicked = new EventEmitter<BookObj>();
  constructor(private dataService:DataService, private  router: Router) { }

  ngOnInit(): void {
    console.log("received book", this.book);
  }

  handleBook()
  {
    this.dataService.setBook(this.book);
    this.router.navigate(['quickview']);
  }
}
