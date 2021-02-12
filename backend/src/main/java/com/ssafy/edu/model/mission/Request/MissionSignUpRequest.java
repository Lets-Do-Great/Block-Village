package com.ssafy.edu.model.mission.Request;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

/**
 * 미션 제작 요청
 * email : 미션 제작하는 유저 email
 * title : 미션 제작 제목
 * content : 미션 제작 내용
 * code : 미션 제작 코드
 */
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
    String image;
    @ApiModelProperty(required = true)
    @NotNull
    int startPositionX;
    @ApiModelProperty(required = true)
    @NotNull
    int startPositionY;
    @ApiModelProperty(required = true)
    @NotNull
    int endPositionX;
    @ApiModelProperty(required = true)
    @NotNull
    int endPositionY;
    @ApiModelProperty(required = true)
    @NotNull
    double difficulty;
    @ApiModelProperty(required = true)
    @NotNull
    String xmlCode;

}
