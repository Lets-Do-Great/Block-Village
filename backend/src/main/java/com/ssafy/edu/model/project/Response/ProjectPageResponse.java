package com.ssafy.edu.model.project.Response;

import io.swagger.annotations.ApiModelProperty;

import java.util.List;

public class ProjectPageResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public List<Object> data;

}
