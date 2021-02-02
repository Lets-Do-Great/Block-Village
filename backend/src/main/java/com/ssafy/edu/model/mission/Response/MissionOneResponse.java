package com.ssafy.edu.model.mission.Response;

import io.swagger.annotations.ApiModelProperty;

import java.util.List;
/**
 * 조회중인 미션 응답
 * status : 응답 상태
 * data : 요청 Object List 데이터
 */
public class MissionOneResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public Object data;
}
