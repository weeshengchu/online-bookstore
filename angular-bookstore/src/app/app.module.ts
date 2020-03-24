import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { BookService } from "./services/book.service";

// 16/75 Make a HTTP GET request to the Spring boot application

@NgModule({
  declarations: [AppComponent, BookListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
