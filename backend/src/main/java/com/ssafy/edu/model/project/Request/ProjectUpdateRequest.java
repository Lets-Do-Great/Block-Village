package com.ssafy.edu.model.project.Request;

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
public class ProjectUpdateRequest {
    @ApiModelProperty(required = true)
    @NotNull
    String email;

    @ApiModelProperty(required = true)
    @NotNull
    Long projectId;

    @ApiModelProperty(required = true)
    @NotNull
    String xmlCode;

    @ApiModelProperty(required = true)
    @NotNull
    String javascriptCode;

    @ApiModelProperty(required = true)
    @NotNull
    String title;

    @ApiModelProperty(required = true)
    @NotNull
    String content;

    @ApiModelProperty(required = true)
    @NotNull
    int blockCnt;
}
