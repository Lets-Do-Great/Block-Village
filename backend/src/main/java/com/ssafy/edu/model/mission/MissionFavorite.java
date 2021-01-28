package com.ssafy.edu.model.mission;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.edu.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


/**
 * 미션 좋아요
 * id : 미션 좋아요 pk
 * favorite : 미션 좋아요 boolean 값
 * user : 유저 연관
 * mission : 미션 연관
 */
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MissionFavorite {
    @Id //ID 어노테이션으로 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 생성
    @Column(name = "mission_like_user_id")
    private Long id;

    private boolean favorite;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="mission_id")
    private Mission mission;
}
