package com.ssafy.edu.model.mission;

import io.swagger.annotations.ApiModelProperty;
/**
 * 미션 응답
 * status : 응답 상태
 * data : 요청 Object 데이터
 */
public class MissionResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public Object data;
}
