package com.weeshengchu.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.weeshengchu.onlinebookstore.entity.Book;

// 9/75: Create rest repositories for book and category entity
// Spring Data Rest will auto create Rest end points based on the entity name

//19/75: Fix the error CORS policy and display the data in html table
@CrossOrigin("http://localhost:4200")
public interface BookRepository extends JpaRepository<Book, Long>{

}
