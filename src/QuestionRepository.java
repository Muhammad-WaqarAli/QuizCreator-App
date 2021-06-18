package com.example.demo.dao;

import com.example.demo.entitiy.Question;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepository extends CrudRepository<Question,Integer> {
}
