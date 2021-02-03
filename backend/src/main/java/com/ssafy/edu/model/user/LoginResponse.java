package com.ssafy.edu.model.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Builder
public class LoginResponse {

    String email;
    String nickname;
    int mileage;
    String profileImage;
    String introduction;
    boolean admin;
    String token;
//    int follwer;
//    int follwing;

}
