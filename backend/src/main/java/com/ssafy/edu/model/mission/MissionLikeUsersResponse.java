package com.ssafy.edu.model.mission;

import io.swagger.annotations.ApiModelProperty;

public class MissionLikeUsersResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public Object data;
}
