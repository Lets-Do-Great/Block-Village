package com.ssafy.start.demo.service.EncryptHelper;

public interface EncryptHelper {
    String encrypt(String password);

    boolean isMatch(String password,String hashed);
}
