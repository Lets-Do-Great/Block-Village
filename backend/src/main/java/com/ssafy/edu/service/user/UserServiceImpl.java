package com.ssafy.edu.service.user;

import com.ssafy.edu.model.user.SignUpRequest;
import com.ssafy.edu.model.user.UpdateRequest;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.model.user.UserResponse;
import com.ssafy.edu.repository.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Autowired
    private UserMailSendService userMailSendService;

    @Autowired
    private EncryptService encryptService;
    
    /* 로그인 */
    @Override
    public ResponseEntity<UserResponse> findByEmailAndPassword(String email, String password){

        ResponseEntity response;
        UserResponse result = new UserResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(email);
        boolean match = encryptService.isMatch(password, userOptional.get().getPassword());

        if(match && userOptional.isPresent() && userOptional.get().getEmailAuth().equals("true")){
            result.status = true;
            result.data = userOptional.get();
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        return response;
    }
    
    /* 사용자 삭제 */
    @Override
    public ResponseEntity<UserResponse> deleteUser(String email){

        ResponseEntity response;
        UserResponse result = new UserResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(email);
        if(userOptional.isPresent()){
            userJpaRepository.delete(userOptional.get());
            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }

        return response;
    }
    
    /* 사용자 회원가입 */
    @Override
    public ResponseEntity<UserResponse> signUp(SignUpRequest signUpRequest){

        ResponseEntity response;
        UserResponse result = new UserResponse();

        String email = signUpRequest.getEmailId() + "@" + signUpRequest.getEmailSite();
        if(userJpaRepository.findByEmail(email).isPresent()){
            result.status = false;
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }

        String key = userMailSendService.getKey(false, 20);
        userMailSendService.mailSendWithUserKey(signUpRequest, key);

        String hashedPw = encryptService.encrypt(signUpRequest.getPassword());

        User user = new User().builder()
                .email(email)
                .password(hashedPw)
                .name(signUpRequest.getName())
                .mileage(0)
                .introduction("")
                .emailAuth(key)
                .joinDate(LocalDate.now())
                .build();

        User save = userJpaRepository.save(user);

        if(save != null){
            result.status = true;
            result.data = save;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
        return response;

    }
    
    /* 회원정보 수정 */
    @Override
    public ResponseEntity<UserResponse> updateUser(UpdateRequest updateRequest, String email){

        ResponseEntity response;
        UserResponse result = new UserResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(email);
        boolean match = encryptService.isMatch(updateRequest.getCurrentPassword(), userOptional.get().getPassword());

        if(!userOptional.isPresent() || !match){
            result.status = false;
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }

        User user = userOptional.get();
        user.setName(updateRequest.getName());
        user.setIntroduction(updateRequest.getIntroduction());

        if(updateRequest.getUpdatePassword() != null){
            user.setPassword(encryptService.encrypt(updateRequest.getUpdatePassword()));
        }

        User save = userJpaRepository.save(user);

        if(save != null){
            result.status = true;
            result.data = save;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
        return response;

    }
    
    /* 이메일 인증 */
    @Override
    public void emailAuth(String email, String key) {

        User user = new User();
        user.setEmail(email);
        user.setEmailAuth(key);

        Optional<User> userOptional = userJpaRepository.findByEmail(email);

        if(userOptional.isPresent() && key.equals(userOptional.get().getEmailAuth())){
            User userUpdate = userOptional.get();
            userUpdate.setEmailAuth("true");
            userJpaRepository.save(userUpdate);
        }

    }
    
    /* 임시 비밀번호 발급 */
    @Override
    public ResponseEntity<UserResponse> tempPassword(String email) {

        ResponseEntity response;
        UserResponse result = new UserResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(email);

        if(userOptional.isPresent()){
            String key = userMailSendService.getKey(false, 8);
            userMailSendService.sendTempPassword(email, key);

            userOptional.get().setPassword(encryptService.encrypt(key));
            userJpaRepository.save(userOptional.get());

            result.status = true;
            response = new ResponseEntity(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }

        return response;

    }


}
