package com.ssafy.edu.model.user;

import io.swagger.annotations.ApiModelProperty;

public class UserResponse {

    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public Object data;

}
