import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpService) { }

  getAllBooksCall() {
    return this.httpService.getAllBooks("book");
  }
}
