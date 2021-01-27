package com.ssafy.edu.model.mission;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MissionSearchTypeRequest {
    @ApiModelProperty(required = true)
    @NotNull
    String sortType;

    @ApiModelProperty(required = true)
    @NotNull
    String searchType;

    @ApiModelProperty(required = true)
    @NotNull
    String keyword;

    @ApiModelProperty(required = true)
    @NotNull
    String keywordType;
}
