package com.ssafy.edu.model.board;

import com.ssafy.edu.model.user.User;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

/*
* id : 게시글 pk
* title : 게시글 제목
* content : 게시글 내용
* views : 조회수
* createdAt : 작성일
* updatedAt : 수정일
* */

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long id;

    @Lob
    private String title;

    @Lob
    private String content;

    @Lob
    private Long views;

    @Column(name="created_at")
    @CreatedDate
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAt;

    @Column(name="updated_at")
    @LastModifiedDate
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate updatedAt;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    // 편의 메소드
    public void setBoard(User user){
        if(this.user != null){
            this.user.removeUser(this);
        }
        this.user = user;
        user.addUser(this);
    }
}
