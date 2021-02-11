package com.ssafy.edu.model.board;

import lombok.*;
import java.time.LocalDateTime;

/*
* 특정 공지사항 조회 - 댓글 객체
* */

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BoardCommentResponse {

    Long id;
    String comment;
    String email;
    String nickname;
    LocalDateTime created_at;
    LocalDateTime updated_at;

}
