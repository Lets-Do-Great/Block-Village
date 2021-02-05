package com.ssafy.edu.service.user;

public interface JwtService {
    public String createToken(String email);
    public void checkValid(String jwt);
}
