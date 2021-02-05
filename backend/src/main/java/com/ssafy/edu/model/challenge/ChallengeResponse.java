package com.ssafy.edu.model.challenge;

import io.swagger.annotations.ApiModelProperty;

public class ChallengeResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public Object data;
}
