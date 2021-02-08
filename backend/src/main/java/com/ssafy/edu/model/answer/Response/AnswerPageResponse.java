package com.ssafy.edu.model.answer.Response;

import io.swagger.annotations.ApiModelProperty;

import java.util.List;

public class AnswerPageResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public List<Object> data;
}
