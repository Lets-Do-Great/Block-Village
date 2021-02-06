package com.ssafy.edu.service.user;

import java.util.Date;
import java.util.Map;

import com.ssafy.edu.model.user.LoginResponse;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Component
public class JwtServiceImpl implements JwtService{

    @Value("${JWT.SECRET}")
    private String SECRET;

    private Long expireMin = 24L;

    @Override
    public String createToken(LoginResponse loginResponse) {
        JwtBuilder jwtBuilder = Jwts.builder();

        jwtBuilder.setHeaderParam("typ", "JWT")
                .setSubject("Login Token")
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * expireMin))
                .claim("userInfo", loginResponse)
                .signWith(SignatureAlgorithm.HS256, SECRET.getBytes());

        String jwt = jwtBuilder.compact();
        return jwt;
    }

    //	전달 받은 토큰이 제대로 생성된것이니 확인 하고 문제가 있다면 RuntimeException을 발생.
    @Override
    public void checkValid(String jwt) {
        //	예외가 발생하지 않으면 OK
        Jwts.parser().setSigningKey(SECRET.getBytes()).parseClaimsJws(jwt);
    }

    //	JWT Token을 분석해서 필요한 정보를 반환.
    public Map<String, Object> getInfo(String jwt) {
        Jws<Claims> claims = null;
        try {
            claims = Jwts.parser().setSigningKey(SECRET.getBytes()).parseClaimsJws(jwt);
        } catch (final Exception e) {
            throw new RuntimeException();
        }
        return claims.getBody();
    }

}
