package com.ssafy.edu.model.block;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Valid
@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlocksignUpTest {

    @ApiModelProperty(required = true)
    @NotNull
    String name;

    @ApiModelProperty(required = true)
    @NotNull
    String category;

    @ApiModelProperty(required = true)
    @NotNull
    int price;
}
