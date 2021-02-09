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

    Long commentId;
    String content;
    String email;
    String nickname;
    LocalDateTime createdAt;
    LocalDateTime updatedAt;

}
