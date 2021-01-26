package com.ssafy.edu.model.board;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BoardResult {
    Long id;
    String title;
    String content;
    String writer;
}