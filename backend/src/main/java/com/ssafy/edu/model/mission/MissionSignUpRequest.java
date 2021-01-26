package com.ssafy.edu.model.mission;

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
public class MissionSignUpRequest {
    @ApiModelProperty(required = true)
    @NotNull
    String email;

    @ApiModelProperty(required = true)
    @NotNull
    String title;

    @ApiModelProperty(required = true)
    @NotNull
    String content;

    @ApiModelProperty(required = true)
    @NotNull
    String code;

}
