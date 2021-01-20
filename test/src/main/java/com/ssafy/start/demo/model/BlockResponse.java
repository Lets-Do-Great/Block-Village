package com.ssafy.start.demo.model;

import com.ssafy.start.demo.model.blocks.Blocks;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;

public class BlockResponse {
    @ApiModelProperty(value = "status", position = 1)
    public boolean status;
    @ApiModelProperty(value = "data", position = 2)
    public List<Blocks> data;
    @ApiModelProperty(value = "object", position = 3)
    public Object object;
    @ApiModelProperty(value = "purpose", position = 4)
    public String purpose;
}
