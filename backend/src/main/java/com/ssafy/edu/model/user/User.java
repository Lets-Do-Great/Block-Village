package com.ssafy.edu.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.edu.model.mission.Mission;
import com.ssafy.edu.model.mission.MissionFavorite;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/*
* id : users 테이블의 pk
* email : users의 이메일
* password : users의 비밀번호
* nickname : users의 별명
* emailAuth : 이메일 인증 여부 ("true"이면 인증 완료)
* mileage : users의 마일리지
* introduction : 자기소개
* profileImage : users의 프로필 이미지
* joinDate : 회원가입 날짜
* */

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    private String email;

    @JsonIgnore
    private String password;

    private String nickname;

    @Column(name = "email_auth")
    private String emailAuth;

    private int mileage;
//    @Column(name = "profile_image")
//    private File?String profileImage;
    private String introduction;

    @Column(name="join_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate joinDate;

}
