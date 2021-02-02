package com.ssafy.edu.model.user;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.edu.model.block.Block;
import com.ssafy.edu.model.board.Board;
import com.ssafy.edu.model.board.BoardComment;
import com.ssafy.edu.model.board.BoardLikeUsers;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;

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

@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
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
//    @Column(name = "profile_image")
//    private File?String profileImage;
    private String introduction;

    @OneToMany(mappedBy = "user")
    private List<Board> boardList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    List<BoardComment> boardCommentList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    List<BoardLikeUsers> boardLikeUsers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    List<Block> blockList = new ArrayList<>();

}
