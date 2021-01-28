package com.ssafy.edu.model.mission;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.edu.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


/**
 * 미션 난이도
 * id : 미션 난이도 pk 값
 * difficulty : 1~5점 사이의 난이도
 * user : 유저 연관
 * mission : 미션 연관
 */
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MissionDifficulty {
    @Id //ID 어노테이션으로 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 생성
    @Column(name = "mission_like_user_id")
    private Long id;

    private double difficulty;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="mission_id")
    private Mission mission;
}
