package com.ssafy.edu.model.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Valid
@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SignUpRequest {

    @ApiModelProperty(required = true)
    @NotNull
    String emailId;

    @ApiModelProperty(required = true)
    @NotNull
    String emailSite;

    @ApiModelProperty(required = true)
    @NotNull
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d$@$!%*#?&]{8,}$")
    String password;

    @ApiModelProperty(required = true)
    @NotNull
    String nickname;

}
