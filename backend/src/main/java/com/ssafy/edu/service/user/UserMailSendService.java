package com.ssafy.edu.service.user;

import com.ssafy.edu.model.user.SignUpRequest;
import org.springframework.mail.MailException;

import javax.mail.MessagingException;

public interface UserMailSendService {

    public String getKey(boolean lowerCheck, int size);
    public void mailSendWithUserKey(SignUpRequest signUpRequest, String key) throws MailException, MessagingException;
    public void sendTempPassword(String email, String key) throws MailException, MessagingException;
    public void mailSendExistUser(String email, String nickname) throws MailException, MessagingException;

}
