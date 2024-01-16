package com.bookapp.springbootbookapp.dao;

import com.bookapp.springbootbookapp.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
