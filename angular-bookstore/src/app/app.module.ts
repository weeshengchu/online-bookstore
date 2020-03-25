import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { BookService } from "./services/book.service";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

// 37/75: Define routes in angular
const routes: Routes = [
  { path: "books", component: BookListComponent },
  { path: "category/:id", component: BookListComponent },
  { path: "", redirectTo: "/books", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

// 16/75 Make a HTTP GET request to the Spring boot application

@NgModule({
  declarations: [AppComponent, BookListComponent, PageNotFoundComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
