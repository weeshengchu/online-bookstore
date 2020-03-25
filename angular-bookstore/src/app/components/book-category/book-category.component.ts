import { Component, OnInit } from "@angular/core";
import { BookCategory } from "../../common/book-category";
import { BookService } from "../../services/book.service";

@Component({
  selector: "app-book-category",
  templateUrl: "./book-category.component.html",
  styleUrls: ["./book-category.component.css"]
})
export class BookCategoryComponent implements OnInit {
  bookCategories: BookCategory[];

  constructor(private _bookService: BookService) {}

  ngOnInit() {
    this.listBookCategories();
  }

  // 48/75: Modify book category component class to get the category data
  listBookCategories() {
    this._bookService
      .getBookCategories()
      .subscribe(data => (this.bookCategories = data));
  }
}
