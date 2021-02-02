package com.ssafy.edu.model.block;

import io.swagger.annotations.ApiModelProperty;

public class BlockResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;
    @ApiModelProperty(value = "data", position = 2)
    public Object data;
}
