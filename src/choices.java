package com.example.demo.entitiy;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class choices {

    public choices(int id, String choice_body, Boolean iscorrect) {
        this.id = id;
        this.choice_body = choice_body;
        this.iscorrect = iscorrect;
    }

    public choices() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String choice_body;
    private Boolean iscorrect;

    public int getId() {
        return id;
    }

    public String getChoice_body() {
        return choice_body;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setChoice_body(String choice_body) {
        this.choice_body = choice_body;
    }

    public Boolean getIscorrect() {
        return iscorrect;
    }

    public void setIscorrect(Boolean iscorrect) {
        this.iscorrect = iscorrect;
    }
}
