package com.ssafy.edu.model.board;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import com.ssafy.edu.model.user.User;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;


import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.ArrayList;

/*
* id : 게시글 pk
* title : 게시글 제목
* content : 게시글 내용
* views : 조회수
* createdAt : 작성일
* updatedAt : 수정일
* */

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
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

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "board")
    @JsonManagedReference
    List<BoardComment> boardCommentList = new ArrayList<>();

    @OneToMany(mappedBy = "board")
    List<BoardLikeUsers> boardLikeUsersList = new ArrayList<>();

}
