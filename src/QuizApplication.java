package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;

@EnableJpaRepositories(basePackages = "com.example.demo.dao")
@SpringBootApplication
public class QuizApplication {

	public static void main(String[] args) {
SpringApplication.run(QuizApplication.class,args);

	}

}