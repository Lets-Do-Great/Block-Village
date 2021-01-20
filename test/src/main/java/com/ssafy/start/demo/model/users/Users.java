package com.ssafy.start.demo.model.users;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.start.demo.model.blocks.Blocks;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;


import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="users")
public class Users {
    @Id //ID 어노테이션으로 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 생성
    @Column(name = "user_id")
    private Long id; //user id 값

    private String email; // user 이메일
    private String name; //user 이름
    private String password; //user 패스워드
    private boolean auth; //SNS? email 인증 boolean 값
    private String profileImg; // user 프로필 이미지
    private int mileage; //user 미션 마일리지
    private LocalDateTime createAt; //user 가입 날짜
    private LocalDateTime loginDates; //user 로그인 날짜 저장
    private String content; // 이거 뭐죠?

    @JsonManagedReference
    @OneToMany(mappedBy = "users")
    private List<Blocks> blocksList = new ArrayList<>();

    public void add(Blocks block){
        blocksList.add(block);
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this, ToStringStyle.MULTI_LINE_STYLE);
    }
}
