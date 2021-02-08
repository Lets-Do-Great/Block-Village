package com.ssafy.edu.model.user;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
public class LoginResponse {

    String email;
    String nickname;
    int mileage;
    String profileImage;
    String introduction;
    boolean admin;

}
