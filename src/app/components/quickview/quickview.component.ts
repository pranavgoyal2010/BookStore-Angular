import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataService/data.service';
import { BookObj } from 'src/assets/type';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  book!:BookObj;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.book=this.dataService.getBook();
   console.log(this.book.bookName)
}

}
