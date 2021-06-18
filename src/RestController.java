package com.example.demo;

import com.example.demo.dao.QuestionRepository;
import com.example.demo.dao.QuizRepository;
import com.example.demo.entitiy.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {
    @Autowired
    QuizRepository quizRepository;

    @GetMapping(value = "/getAll")
    public List<Quiz> total_data(){
        return (List<Quiz>) quizRepository.findAll();
    }

    @PostMapping(value = "/addOne")
    public List<Quiz> persist(@RequestBody Quiz quiz){
        quizRepository.save(quiz);
        return (List<Quiz>) quizRepository.findAll();
    }

}
