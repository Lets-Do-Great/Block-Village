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
 * id : 미션 상태 id
 * updated_at : 미션 풀기 시작한날.
 * completed : 완성 단게
 * user : 1:1 매칭 유저
 * mission : 1:1 매칭 미션
 */
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="mission_state")
public class MissionState {
    @Id //ID 어노테이션으로 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 생성
    @Column(name = "mission_state_id")
    private Long id;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate updated_at;
    private boolean completed;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id", insertable = false, updatable = false)
    private User user;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="mission_id", insertable = false, updatable = false)
    private Mission mission;
}
