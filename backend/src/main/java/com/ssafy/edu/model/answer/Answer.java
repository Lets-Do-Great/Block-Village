package com.ssafy.edu.model.answer;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.edu.model.mission.Mission;
import com.ssafy.edu.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="answer")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    private Long id;
    private String title;
    private String content;
    private String code;
    private int favorite;
    private int view;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createdAt;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date updatedAt;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="mission_id")
    private Mission mission;

    @JsonManagedReference
    @OneToMany(mappedBy = "answer")
    private List<AnswerFavorite> answerFavoriteList = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "answer")
    private List<AnswerComment> answerCommentList = new ArrayList<>();
}
