package com.ssafy.edu.model.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

// 굳이 만들어야할까 많은 생각을 했습니다...
// 다른 엔티티를 활용해도 될 것 같음

@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder // Setter 대신
public class LoginRequest {

    @ApiModelProperty(required = true)
    @NotNull
    String email;

    @ApiModelProperty(required = true)
    @NotNull
    String password;

}
