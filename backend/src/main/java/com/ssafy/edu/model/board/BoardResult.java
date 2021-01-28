package com.ssafy.edu.model.board;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class BoardResult {
    Long id;
    String title;
    String content;
    String writer;
    LocalDateTime createdDate;
    LocalDateTime updatedDate;
    List<BoardCommentResponse> boardCommentList;
}