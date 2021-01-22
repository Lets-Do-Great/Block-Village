package com.ssafy.edu.model.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder // Setter 대신
public class UpdateRequest {

    @ApiModelProperty(required = true)
    String currentPassword;

    @ApiModelProperty(required = false)
    String updatePassword;

    @ApiModelProperty(required = true)
    @NotNull
    String name;

    //    private File?String profileImage;
    String introduction;

}
