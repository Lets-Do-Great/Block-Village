package com.ssafy.edu.model.mission.Request;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

/**
 * 미션 참여 응답
 * email : 미션 참여 유저 email
 * missionId : 미션 참여 미션 id (pk)
 * todo : 미션 진행도
 */
@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MissionTodoRequest {
    @ApiModelProperty(required = true)
    @NotNull
    String email;

    @ApiModelProperty(required = true)
    @NotNull
    Long missionId;

    @ApiModelProperty(required = true)
    @NotNull
    String todo;
}
