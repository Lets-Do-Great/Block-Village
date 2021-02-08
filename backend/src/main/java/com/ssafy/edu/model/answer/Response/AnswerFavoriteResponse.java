package com.ssafy.edu.model.answer.Response;

import io.swagger.annotations.ApiModelProperty;

public class AnswerFavoriteResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;

    @ApiModelProperty(value = "data", position = 2)
    public Object data;
}
