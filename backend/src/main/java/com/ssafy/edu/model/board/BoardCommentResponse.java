package com.ssafy.edu.model.board;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;

import java.time.LocalDate;
@Builder
public class BoardCommentResponse {

    public String nickname;
    public String content;
    public LocalDate createdAt;
    public LocalDate updatedAt;

}
