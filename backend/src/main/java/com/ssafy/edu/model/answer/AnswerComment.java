package com.ssafy.edu.model.answer;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.edu.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnswerComment {
    @Id //ID 어노테이션으로 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 생성
    @Column(name = "answer_comment_id")
    private Long id;

    private String comment;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date updatedAt;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="answer_id")
    private Answer answer;
}
