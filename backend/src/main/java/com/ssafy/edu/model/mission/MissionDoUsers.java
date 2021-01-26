package com.ssafy.edu.model.mission;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.edu.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="mission_do_users")
public class MissionDoUsers {
    @Id //ID 어노테이션으로 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 생성
    @Column(name = "mission_do_users_id")
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
