package com.ssafy.edu.model.mission;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.Entity;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
/**
 * 미선 좋아요 요청
 * email : 미션 좋아요 요청 유저 email
 * missionId : 좋아요 누른 미션의 id
 * favorite : 좋아요 boolean
 */
@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MissionFavoriteRequest {
    @ApiModelProperty(required = true)
    @NotNull
    String email;

    @ApiModelProperty(required = true)
    @NotNull
    Long missionId;

    @ApiModelProperty(required = true)
    @NotNull
    boolean favorite;
}
