package com.ssafy.edu.model.board;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BoardResult {
    Long boardId;
    String title;
    String content;
    String email;
    Long views;
    LocalDateTime createdDate;
    LocalDateTime updatedDate;
    List<BoardCommentResponse> boardCommentList;
}