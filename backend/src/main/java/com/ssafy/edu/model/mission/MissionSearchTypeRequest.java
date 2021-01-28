package com.ssafy.edu.model.mission;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;


/**
 * 미션 검색 타입
 * sortType : 오름차순(increase) 내림차순(decrease)
 * searchType : 좋아요순(missionLike), new순(updatedAt), 난이도순(difficulty), 참여한 사람 순 (people)
 * keyword : 검색어
 * keywordType : 유저(user), 제목(title)
 */
@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MissionSearchTypeRequest {
    @ApiModelProperty(required = true)
    @NotNull
    String sortType;

    @ApiModelProperty(required = true)
    @NotNull
    String searchType;

    @ApiModelProperty(required = true)
    @NotNull
    String keyword;

    @ApiModelProperty(required = true)
    @NotNull
    String keywordType;
}
