import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { BookObj } from 'src/assets/type';

@Component({
  selector: 'app-bookscontainer',
  templateUrl: './bookscontainer.component.html',
  styleUrls: ['./bookscontainer.component.scss']
})
export class BookscontainerComponent implements OnInit {

  booksList: BookObj[] = []
  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooksCall().subscribe(
      (res:any) => {
        this.booksList = res.data;
        console.log(this.booksList)
      },
      err => {
        console.log(err);
      });
  }

}
