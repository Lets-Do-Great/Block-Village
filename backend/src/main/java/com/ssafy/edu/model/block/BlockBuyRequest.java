package com.ssafy.edu.model.block;


import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Valid
@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlockBuyRequest {
    @ApiModelProperty(required = true)
    @NotEmpty
    String email;

    @ApiModelProperty(required = true)
    @NotEmpty
    List<Long> blockId;
}
