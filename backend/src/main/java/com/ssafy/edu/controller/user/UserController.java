package com.ssafy.edu.controller.user;

import com.ssafy.edu.model.user.LoginRequest;
import com.ssafy.edu.model.user.SignUpRequest;
import com.ssafy.edu.model.user.UpdateRequest;
import com.ssafy.edu.model.user.UserResponse;
import com.ssafy.edu.service.user.UserServiceImpl;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = UserResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = UserResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = UserResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = UserResponse.class)})

@CrossOrigin(origins = {"http://localhost:3000"})
@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @ApiOperation(value = "로그인", notes = "로그인에 대해 필요한 디테일한 설명")
    @PostMapping("/do/login")
    @ResponseBody
    public ResponseEntity<UserResponse> login(@RequestBody LoginRequest loginRequest){
        return userService.login(loginRequest.getEmail(), loginRequest.getPassword());
    }

    @ApiOperation(value = "회원가입", notes = "회원가입...에 대한 디테일한 설명")
    @PostMapping("/do")
    @ResponseBody
    public ResponseEntity<UserResponse> singUp(@RequestBody SignUpRequest signUpRequest){
        return userService.signUp(signUpRequest);
    }

    @ApiOperation(value="비밀번호 찾기")
    @PostMapping("/do/{email}")
    @ResponseBody
    public ResponseEntity<UserResponse> findByPasswordAndEmail(@PathVariable("email") String email) throws MessagingException {
        return userService.tempPassword(email);
    }

    @ApiOperation(value = "회원정보 수정", notes = "회원정보 수정...에 대한 디테일한 설명", authorizations = { @Authorization(value="jwtToken") })
    @PutMapping("/{email}")
    @ResponseBody
    public ResponseEntity<UserResponse> updateUser(@PathVariable("email") String email, @RequestBody UpdateRequest updateRequest){
        return userService.updateUser(updateRequest, email);
    }

    @ApiOperation(value = "회원 탈퇴", notes = "회원 탈퇴...에 대한 디테일한 설명", authorizations = { @Authorization(value="jwtToken") })
    @DeleteMapping("/{email}")
    @ResponseBody
    public ResponseEntity<UserResponse> deleteUser(@PathVariable("email") String email){
        return userService.deleteUser(email);
    }

    @ApiOperation(value = "메일인증", notes = "프론트에서는 신경안써도 됩니다!")
    @GetMapping("/do/email_auth")
    public String emailAuthenticate(@RequestParam("email") String email, @RequestParam("key") String key, Model model){
        userService.emailAuth(email, key);
        model.addAttribute("email", email);
        return "authentication";
    }

}
