package com.ssafy.edu.model.mission;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.edu.model.answer.Answer;
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


/**
 * 미션
 * id : 미션 pk
 * title : 미션 제목
 * content : 미션 본문
 * category : 미션 카테고리
 * created_at : 미션 제작일
 * updated_at : 미션 수정일
 * difficulty : 난이도
 * favorite : 좋아요 누른 유저의 수
 * people : 참여한 유저의 수
 * code : 코드
 * user : 미션 제작 유저
 * missionCommentsList : 미션 댓글
 * missionLikeUsersList : 미션 좋아요 유저
 */
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="missions")
public class Mission {
    @Id //ID 어노테이션으로 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 생성
    @Column(name = "mission_id")
    private Long id;
    private String title;
    private String content;
    @Column(columnDefinition = "TEXT")
    private String xmlCode;
    private double difficulty;
    private int favorite;
    private int startPositionX;
    private int startPositionY;
    private int endPositionX;
    private int endPositionY;
    private int people;
    private String missionImg;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createdAt;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date updatedAt;

    @JsonBackReference
    @ManyToOne

    @JoinColumn(name="user_id")
    private User user;

    @JsonManagedReference
    @OneToMany(mappedBy = "mission", cascade = {CascadeType.ALL})
    private List<MissionFavorite> missionLikeUsersList = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "mission", cascade = {CascadeType.ALL})
    private List<MissionDifficulty> missionDifficultyList = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "mission", cascade = {CascadeType.ALL})
    private List<MissionDoUsers> missionDoUsersList = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "mission", cascade = {CascadeType.ALL})
    private List<Answer> answerList = new ArrayList<>();

}
