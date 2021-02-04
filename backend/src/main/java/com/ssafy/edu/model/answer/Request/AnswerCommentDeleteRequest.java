package com.ssafy.edu.model.answer.Request;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AnswerCommentDeleteRequest {
    @ApiModelProperty(required = true)
    @NotNull
    String email;
    @ApiModelProperty(required = true)
    @NotNull
    Long commentId;
}
