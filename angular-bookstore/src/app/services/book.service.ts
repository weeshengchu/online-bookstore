import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Book } from "../common/book";

// 16/75: Make a HTTP GET request to the Spring boot application
@Injectable({
  providedIn: "root"
})
export class BookService {
  private baseUrl = "http://localhost:8080/api/v1//books";

  constructor(private httpClient: HttpClient) {}

  getBooks(theCategoryId: number): Observable<Book[]> {
    // 41/75: Update book service class to return books based on category id
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
    return this.httpClient
      .get<GetResponseBooks>(searchUrl)
      .pipe(map(response => response._embedded.books));
  }
}

interface GetResponseBooks {
  _embedded: {
    books: Book[];
  };
}
