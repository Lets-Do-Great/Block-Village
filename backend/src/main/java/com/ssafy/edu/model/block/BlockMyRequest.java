package com.ssafy.edu.model.block;


import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

@Valid
@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlockMyRequest {
    @ApiModelProperty(required = true)
    @NotEmpty
    String email;

    @ApiModelProperty(required = true)
    @NotEmpty
    String type;
}
