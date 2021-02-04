package com.ssafy.edu.model.mission.Request;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

/**
 * 미션 수정 요청
 * email : 미션 수정 유저
 * missionId  : 미션 수정 id (pk)
 * title : 미션 제목
 * content  : 미션 제작 내용
 * code : 미션 미션 제작 코드
 */
@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MissionUpdateRequest {
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

}
