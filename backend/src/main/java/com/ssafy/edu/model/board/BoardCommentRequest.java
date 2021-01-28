package com.ssafy.edu.model.board;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

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
