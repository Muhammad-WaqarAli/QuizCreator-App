package com.example.demo.dao;

import com.example.demo.entitiy.Quiz;
import org.springframework.data.repository.CrudRepository;

public interface QuizRepository extends CrudRepository<Quiz,Integer> {

}
