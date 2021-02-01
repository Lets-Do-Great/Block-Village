package com.ssafy.edu.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

/*
* id : users 테이블의 pk
* email : users의 이메일
* password : users의 비밀번호
* name : users의 실명
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

    @Id @GeneratedValue
    private Long id;

    private String email;

    @JsonIgnore
    private String password;

    private String nickname;

    @Column(name = "email_auth")
    private String emailAuth;

    private int mileage;
    private String profile;
    private String introduction;

    private boolean admin;

    // follower & following

}
