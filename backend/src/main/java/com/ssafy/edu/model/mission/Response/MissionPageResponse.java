package com.ssafy.edu.model.mission.Response;

import io.swagger.annotations.ApiModelProperty;

import java.util.List;

/**
 * 미션 페이징 처리 응답
 * status : 응답 상태
 * data : 요청 Object 데이터 List
 */
public class MissionPageResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public List<Object> data;
}
