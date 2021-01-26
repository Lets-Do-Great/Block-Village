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
 * 미션 좋아요 유저
 * id : 미션 좋아요 pk
 * user : 미션 좋아요 유저
 * mission : 미션
 */
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MissionLikeUsers {
    @Id //ID 어노테이션으로 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 생성
    @Column(name = "mission_like_user_id")
    private Long id;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id", insertable = false, updatable = false)
    private User user;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="mission_id", insertable = false, updatable = false)
    private Mission mission;
}
