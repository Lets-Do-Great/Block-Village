package com.ssafy.edu.model.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Data
@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder // Setter 대신
public class UpdateRequest {

    @ApiModelProperty(required = false)
    MultipartFile profileImage;

    @ApiModelProperty(required = false)
    String prevPassword;

    @ApiModelProperty(required = false)
    String newPassword;

    @ApiModelProperty(required = true)
    @NotNull
    String nickname;

    @ApiModelProperty(required = true)
    @NotNull
    String introduction;

    @ApiModelProperty(required = true)
    @NotNull
    String email;

}
