package com.ssafy.edu.service.user;

import com.ssafy.edu.model.user.LoginResponse;

public interface JwtService {
    public String createToken(LoginResponse loginResponse);
    public void checkValid(String jwt);
}
