package com.bookapp.springbootbookapp.dao;

import com.bookapp.springbootbookapp.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long> {
}
