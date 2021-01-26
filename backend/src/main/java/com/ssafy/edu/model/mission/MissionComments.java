package com.ssafy.edu.model.mission;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.edu.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;


/**
 * 미션 댓글
 * id : 미션댓글 아이디
 * title : 미션 댓글 제목
 * content : 미션 댓글 내용
 * updated_at : 미션 댓글 작성 일시
 */
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="mission_comments")
public class MissionComments {
    @Id //ID 어노테이션으로 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 생성
    @Column(name = "mission_comment_id")
    private Long id;
    private String title;
    private String content;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate updated_at;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id", insertable = false, updatable = false)
    private User user;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="mission_id", insertable = false, updatable = false)
    private Mission mission;
}
