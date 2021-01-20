package com.ssafy.start.demo.controller.users;


import com.ssafy.start.demo.model.UserResponse;
import com.ssafy.start.demo.model.users.Users;
import com.ssafy.start.demo.service.users.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = UserResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = UserResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = UserResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = UserResponse.class)})
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("users")
    @ApiOperation(value = "전체 사용자 검색")
    public Object getAllUsers() {
        List<Users> userList = userService.findAll();
        ResponseEntity response = null;
        if (userList.size() > 0) { //응답 만들어주는 비지니스 로직
            final UserResponse result = new UserResponse();
            result.status = true;
            result.data = userList;
            result.purpose = "findAll";
            response = new ResponseEntity<>(result, HttpStatus.NOT_FOUND); //성공
        } else {
            response = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);//실패
        }
        return response;
    }

}
