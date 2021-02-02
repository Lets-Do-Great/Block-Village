package com.ssafy.edu.model.board;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

/* 
* 댓글 작성 요청 객체
* */

@Valid
@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BoardCommentRequest {

    @ApiModelProperty(required = true)
    @NotEmpty
    String email;

    @ApiModelProperty(required = true)
    @NotEmpty
    String content;

}
