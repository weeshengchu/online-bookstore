import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/common/book";
import { BookService } from "src/app/services/book.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-list",
  // templateUrl: "./book-list.component.html",
  templateUrl: "./book-grid.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  // 15/75 Display the list of books in html table with hard-coded values
  // books: Book[] = [
  //   {
  //     sku: "text-100",
  //     name: "C Programming Language",
  //     description: "Learn C Programming Language",
  //     unitPrice: 600,
  //     imageUrl: "assets/images/books/text-100.png",
  //     active: true,
  //     unitsInStock: 100,
  //     createdOn: new Date(),
  //     updatedOn: null
  //   },
  //   {
  //     sku: "text-101",
  //     name: "C# Crash Course",
  //     description: "Learn C# Programming Language",
  //     unitPrice: 900,
  //     imageUrl: "assets/images/books/text-101.png",
  //     active: true,
  //     unitsInStock: 100,
  //     createdOn: new Date(),
  //     updatedOn: null
  //   },
  //   {
  //     sku: "text-102",
  //     name: "C++ Crash Course",
  //     description: "Learn C++ Programming Language",
  //     unitPrice: 700,
  //     imageUrl: "assets/images/books/text-102.png",
  //     active: true,
  //     unitsInStock: 100,
  //     createdOn: new Date(),
  //     updatedOn: null
  //   }
  // ];

  // 18/75 Call a service method to get the book array

  books: Book[];
  currentCategoryId: number;

  constructor(
    private _bookService: BookService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(() => {
      this.listBooks();
    });
  }

  // 40/75: Update book list component to accept the route parameter
  listBooks() {
    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has(
      "id"
    );

    if (hasCategoryId) {
      this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get(
        "id"
      );
    } else {
      this.currentCategoryId = 1;
    }

    this._bookService
      // 41/75: Update book service class to return books based on category id -> book.service.ts
      .getBooks(this.currentCategoryId)
      .subscribe(data => (this.books = data));
  }
}
