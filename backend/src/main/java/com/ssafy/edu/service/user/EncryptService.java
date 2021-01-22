package com.ssafy.edu.service.user;

public interface EncryptService {
    String encrypt(String password);
    boolean isMatch(String password,String hashed);
}
