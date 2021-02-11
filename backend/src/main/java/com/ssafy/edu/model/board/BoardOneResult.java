package com.ssafy.edu.model.board;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

/*
* 특정 공지사항 조회 
* 응답 객체
* */

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class BoardOneResult {

    Long boardId;
    String email;
    String nickname;
    String title;
    String content;
    Long views;
    LocalDateTime createdDate;
    LocalDateTime updatedDate;

}