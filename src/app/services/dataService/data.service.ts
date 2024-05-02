import { Injectable } from '@angular/core';
import { BookObj } from 'src/assets/type';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  book!: BookObj;

  constructor() { }

  setBook(book: any) {
    this.book = book;
  }
  getBook(){
    return this.book;
  }
}
