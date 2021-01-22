package com.ssafy.edu.service.user;

import com.ssafy.edu.model.user.SignUpRequest;

public interface UserMailSendService {

    public String getKey(boolean lowerCheck, int size);
    public void mailSendWithUserKey(SignUpRequest signUpRequest, String key);
    public void sendTempPassword(String email, String key);

}
