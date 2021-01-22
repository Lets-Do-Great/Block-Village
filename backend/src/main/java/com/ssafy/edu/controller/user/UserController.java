package com.ssafy.edu.controller.user;

import com.ssafy.edu.model.user.LoginRequest;
import com.ssafy.edu.model.user.SignUpRequest;
import com.ssafy.edu.model.user.UpdateRequest;
import com.ssafy.edu.model.user.UserResponse;
import com.ssafy.edu.service.user.UserServiceImpl;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = UserResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = UserResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = UserResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = UserResponse.class)})

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @ApiOperation(value = "로그인", notes = "로그인에 대해 필요한 디테일한 설명")
    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody LoginRequest loginRequest){
        return userService.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
    }

    @ApiOperation(value = "회원가입", notes = "회원가입...에 대한 디테일한 설명")
    @PostMapping
    public ResponseEntity<UserResponse> singUp(@RequestBody SignUpRequest signUpRequest){
        return userService.signUp(signUpRequest);
    }

    @ApiOperation(value="비밀번호 찾기")
    @PostMapping("/{email}")
    public ResponseEntity<UserResponse> findByPasswordAndEmail(@PathVariable("email") String email){
        return userService.tempPassword(email);
    }

    @ApiOperation(value = "회원정보 수정", notes = "회원정보 수정...에 대한 디테일한 설명")
    @PutMapping("/{email}")
    public Object updateUser(@PathVariable("email") String email, @RequestBody UpdateRequest updateRequest){
        return userService.updateUser(updateRequest, email);
    }

    @ApiOperation(value = "회원 탈퇴", notes = "회원 탈퇴...에 대한 디테일한 설명")
    @DeleteMapping("/{email}")
    public ResponseEntity<UserResponse> deleteUser(@PathVariable("email") String email){
        return userService.deleteUser(email);
    }

    @ApiOperation(value = "메일인증", notes = "프론트에서는 신경안써도 됩니다!")
    @GetMapping("/email_auth")
    public void emailAuthenticate(@RequestParam("email") String email, @RequestParam("key") String key){
        userService.emailAuth(email, key);
    }

}
