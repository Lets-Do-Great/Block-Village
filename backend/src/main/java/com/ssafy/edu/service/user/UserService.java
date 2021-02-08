package com.ssafy.edu.service.user;

import com.ssafy.edu.model.user.SignUpRequest;
import com.ssafy.edu.model.user.UpdateRequest;
import com.ssafy.edu.model.user.UserResponse;
import org.springframework.http.ResponseEntity;

import javax.mail.MessagingException;

public interface UserService {

    public ResponseEntity<UserResponse> login(String email, String password);
    public ResponseEntity<UserResponse> updateUser(UpdateRequest updateRequest, String email);
    public ResponseEntity<UserResponse> deleteUser(String email);
    public void emailAuth(String email, String key);
    public ResponseEntity<UserResponse> tempPassword(String email) throws MessagingException;
    public ResponseEntity<UserResponse> signUp(SignUpRequest signUpRequest);

}
