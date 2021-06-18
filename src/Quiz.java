package com.example.demo.entitiy;



import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Data
@Entity
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    private int points;
    private int time_allowed;
    @Temporal(TemporalType.DATE)

    private Date deadline;

    @OneToMany(cascade = {CascadeType.ALL})
    private Set<Question> questions;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public void setTime_allowed(int time_allowed) {
        this.time_allowed = time_allowed;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public String getTitle() {
        return title;
    }

    public Quiz(int id, String title, int points, int time_allowed, Date deadline) {
        this.id = id;
        this.title = title;
        this.points = points;
        this.time_allowed = time_allowed;
        this.deadline = deadline;
    }

    public int getPoints() {
        return points;
    }

    public Quiz() {
    }

    public int getTime_allowed() {
        return time_allowed;
    }

    public Date getDeadline() {
        return deadline;
    }
}
