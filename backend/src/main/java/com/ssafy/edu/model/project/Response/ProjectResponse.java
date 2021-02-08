package com.ssafy.edu.model.project.Response;

import io.swagger.annotations.ApiModelProperty;

public class ProjectResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public Object data;
}
