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
public class AnswerSignupRequest {
    @ApiModelProperty(required = true)
    @NotNull
    String email;

    @ApiModelProperty(required = true)
    @NotNull
    Long missionId;

    @ApiModelProperty(required = true)
    @NotNull
    String title;

    @ApiModelProperty(required = true)
    @NotNull
    String content;

    @ApiModelProperty(required = true)
    @NotNull
    String xmlCode;

    @ApiModelProperty(required = true)
    @NotNull
    String javascriptCode;
}
