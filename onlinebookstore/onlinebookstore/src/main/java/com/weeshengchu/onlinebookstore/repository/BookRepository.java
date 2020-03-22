package com.weeshengchu.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.weeshengchu.onlinebookstore.entity.Book;

// 9/75: Create rest repositories for book and category entity
// Spring Data Rest will auto create Rest end points based on the entity name
public interface BookRepository extends JpaRepository<Book, Long>{

}
