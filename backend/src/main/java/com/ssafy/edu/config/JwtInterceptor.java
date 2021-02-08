package com.ssafy.edu.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.service.user.JwtServiceImpl;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.Map;

@Component
public class JwtInterceptor implements HandlerInterceptor {

    @Autowired
    private JwtServiceImpl jwtServiceImpl;

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if(request.getMethod().equals("OPTIONS")) return true;

        String givenToken = request.getHeader("token");

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        JSONObject obj = new JSONObject();

        if(givenToken != null && givenToken.length()>0){

            try {

                Map<String, Object> info = jwtServiceImpl.getInfo(givenToken);

                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, String> result = objectMapper.convertValue(info.get("userInfo"), Map.class);


                if (result != null && userJpaRepository.findByEmail(result.get("email")).isPresent()) {
                    jwtServiceImpl.checkValid(givenToken);
                    return true;
                }

            } catch (final Exception e){
                e.printStackTrace();
                obj.put("status", false);
                response.getWriter().print(obj.toString());
                response.getWriter().flush();
                return false;
            }
        }

        obj.put("status", false);
        response.getWriter().print(obj.toString());
        response.getWriter().flush();
        return false;
    }
}