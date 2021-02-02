package com.ssafy.edu.model.board;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.edu.model.BaseTimeEntity;
import com.ssafy.edu.model.user.User;
import lombok.*;

import javax.persistence.*;

/*
 *  id : board_comment 테이블 pk
 *  content : 댓글 내용
 *  -- [상속 ] Database에 자동 생성되는 컬럼 --
 *  created_date : 작성일
 *  updated_date : 수정일
 * */

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
@Entity
@Table(name ="board_comment")
public class BoardComment extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_comment_id")
    private Long commentId;

    @Lob
    private String content;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
