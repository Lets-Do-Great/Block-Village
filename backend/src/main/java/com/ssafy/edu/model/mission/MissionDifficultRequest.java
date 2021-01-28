package com.ssafy.edu.model.mission;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

/**
 * 미션 난이도 요청
 * email : 난이도 요청 보낸 유저 email
 * missionId : 난이도 요청의 mission id(pk)
 * difficulty : 1~5점 사이의 난이도
 */
@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MissionDifficultRequest {
    @ApiModelProperty(required = true)
    @NotNull
    String email;

    @ApiModelProperty(required = true)
    @NotNull
    Long missionId;

    @ApiModelProperty(required = true)
    @NotNull
    double difficulty;
}
