package com.ssafy.edu.model.mission;

import io.swagger.annotations.ApiModelProperty;
/**
 * status : 응답 상태
 * data : 요청 Object 데이터
 */
public class MissionTodoResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public Object data;
}
