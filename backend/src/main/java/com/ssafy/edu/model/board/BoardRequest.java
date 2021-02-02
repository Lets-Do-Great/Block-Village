package com.ssafy.edu.model.board;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Valid
@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BoardRequest {

    @ApiModelProperty(required = true)
    @NotEmpty
    String email;

    @ApiModelProperty(required = true)
    @NotEmpty
    String title;

    @ApiModelProperty(required = true)
    @NotEmpty
    String content;

}
