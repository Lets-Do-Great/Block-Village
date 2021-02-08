package com.ssafy.edu.model.board;

import lombok.*;

import javax.validation.Valid;
import java.time.LocalDateTime;

/*
* 전체 공지사항 조회
* 응답 객체
* */

@Valid
@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BoardResponse {
    Long boardId;
    String title;
    String email;
    Long views;
    LocalDateTime createdAt;
    LocalDateTime updatedAt;
}
