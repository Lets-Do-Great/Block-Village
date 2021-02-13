package com.ssafy.edu.controller.user;

import com.ssafy.edu.model.user.*;
import com.ssafy.edu.service.s3Service.S3Service;
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
import java.io.IOException;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = UserResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = UserResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = UserResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = UserResponse.class)})

@CrossOrigin(origins = {"http://localhost:3000"})
@Controller
@RequestMapping("users")
public class UserController {

    @Autowired
    private S3Service s3Service;

    @Autowired
    private UserServiceImpl userService;

    @ApiOperation(value = "로그인")
    @PostMapping("/do/login")
    @ResponseBody
    public ResponseEntity<UserResponse> login(@RequestBody LoginRequest loginRequest){
        return userService.login(loginRequest.getEmail(), loginRequest.getPassword());
    }

    @ApiOperation(value = "회원가입")
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

    @ApiOperation(value = "회원정보 수정", authorizations = { @Authorization(value="jwtToken") })
    @PutMapping
    @ResponseBody
    public ResponseEntity<UserResponse> updateUser(UpdateRequest updateRequest) throws IOException {
        if(!"".equals(updateRequest.getProfileImage().getOriginalFilename())){
            String imagePath = s3Service.upload(updateRequest.getProfileImage(), "profile");
            return userService.updateUser(updateRequest, updateRequest.getEmail(), imagePath);
        }
        return userService.updateUser(updateRequest, updateRequest.getEmail(), "");
    }

    @ApiOperation(value = "회원 탈퇴", authorizations = { @Authorization(value="jwtToken") })
    @DeleteMapping("/{email}")
    @ResponseBody
    public ResponseEntity<UserResponse> deleteUser(@PathVariable("email") String email){
        return userService.deleteUser(email);
    }

    @ApiOperation(value = "메일인증")
    @GetMapping("/do/email_auth")
    public String emailAuthenticate(@RequestParam("email") String email, @RequestParam("key") String key, Model model){
        userService.emailAuth(email, key);
        model.addAttribute("email", email);
        return "authentication";
    }

    @ApiOperation(value = "마일리지", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/do/mileage")
    @ResponseBody
    public ResponseEntity<UserResponse> mileage(@RequestBody MileageRequest mileageRequest){
        return userService.mileage(mileageRequest);
    }

}
