package com.weeshengchu.onlinebookstore.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import com.weeshengchu.onlinebookstore.entity.Book;

// 9/75: Create rest repositories for book and category entity
// Spring Data Rest will auto create Rest end points based on the entity name

// 19/75: Fix the error CORS policy and display the data in html table
// 49/75: Fixing the CORS policy no 'access-control-allow-origin'
//@CrossOrigin("http://localhost:4200")
public interface BookRepository extends JpaRepository<Book, Long>{
	
	// 36/75: Customzing/overriding the rest end point name for query method
	@RestResource(path = "categoryid")
	
	// 35/75: Define a query method in book repository
	Page<Book> findByCategoryId(@Param("id") Long id, Pageable pageable);
}
