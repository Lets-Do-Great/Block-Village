package com.ssafy.edu.model.board;

import io.swagger.annotations.ApiModelProperty;

public class BoardResponse {

    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public Object data;

}
