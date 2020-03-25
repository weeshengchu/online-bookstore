package com.weeshengchu.onlinebookstore.config;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

//import com.weeshengchu.onlinebookstore.entity.Book;
//import com.weeshengchu.onlinebookstore.entity.BookCategory;

// 13/75: Expose ids in json response
@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer{
	
	@Autowired
	private EntityManager entityManager;
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
//		config.exposeIdsFor(Book.class);
//		config.exposeIdsFor(BookCategory.class);

		//auto set IDs in json response for us instead of manually adding the classes
		config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream()
				.map(Type::getJavaType)
				.toArray(Class[]::new));
		
		// 49/75: Fixing the CORS policy no 'access-control-allow-origin'
		config.getCorsRegistry()
		.addMapping("/**")
		.allowedOrigins("http://localhost:4200");
}
}