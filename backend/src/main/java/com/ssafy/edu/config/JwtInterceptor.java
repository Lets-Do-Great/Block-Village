package com.ssafy.edu.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.service.user.JwtServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class JwtInterceptor implements HandlerInterceptor {

    @Autowired
    private JwtServiceImpl jwtServiceImpl;

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String givenToken = request.getHeader("token");
        System.out.println(givenToken);

        if(givenToken != null && givenToken.length()>0){

            Object email = jwtServiceImpl.getInfo(givenToken).get("email");

            User user = userJpaRepository.findByEmail(email.toString())
                .orElseThrow(() -> new IllegalArgumentException(("존재하지 않는 유저입니다.")));

            jwtServiceImpl.checkValid(givenToken);
            return true;

        }else {
            throw new RuntimeException("인증 토큰이 없습니다.");
        }

    }
}