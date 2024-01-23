package com.bookapp.springbootbookapp.dao;

import com.bookapp.springbootbookapp.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
