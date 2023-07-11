package com.msinandemir.libraryapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.msinandemir.libraryapp.entities.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    
}
