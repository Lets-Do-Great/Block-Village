package com.ssafy.edu.service.challenge;


import com.ssafy.edu.model.challenge.Challenge;
import com.ssafy.edu.model.challenge.ChallengeResponse;
import com.ssafy.edu.model.challenge.ChallengeUser;
import com.ssafy.edu.model.challenge.ChallengeUserRequest;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.ChallengeJpaRepository;
import com.ssafy.edu.repository.ChallengeUsersJpaRepository;
import com.ssafy.edu.repository.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChallengeServiceImpl implements ChallengeService{
    @Autowired
    private UserJpaRepository userJpaRepository;

    @Autowired
    private ChallengeJpaRepository challengeJpaRepository;

    @Autowired
    private ChallengeUsersJpaRepository challengeUsersJpaRepository;

    @Override
    public ResponseEntity<ChallengeResponse> getChallengeList(){
        ChallengeResponse result = new ChallengeResponse();
        List<Challenge> challengeList = challengeJpaRepository.findAll();
        if(!challengeList.isEmpty()){
            result.data = challengeList;
            result.status = true;
        }else {
            result.status = false;
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<ChallengeResponse> getUserChallengeList(ChallengeUserRequest challengeUserRequest) {
        ChallengeResponse result = new ChallengeResponse();
        Optional<User> userOpt = userJpaRepository.findByEmail(challengeUserRequest.getEmail());
        List<ChallengeUser> challengeList = challengeUsersJpaRepository.findByUserAndDone(userOpt.get(), challengeUserRequest.getTodo());
        if(!challengeList.isEmpty()){
            result.data = challengeList;
            result.status = true;
        }else {
            result.status = false;
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<ChallengeResponse> joinChallenge(ChallengeUserRequest challengeUserRequest, Long challengeId) {
        ChallengeResponse result = new ChallengeResponse();
        Optional<User> userOpt = userJpaRepository.findByEmail(challengeUserRequest.getEmail());
        Optional<Challenge> challengeOpt = challengeJpaRepository.findById(challengeId);
        if(userOpt.isPresent()){
            ChallengeUser.ChallengeUserBuilder challengeUser = ChallengeUser.builder()
                    .user(userOpt.get())
                    .challenge(challengeOpt.get())
                    .done(challengeUserRequest.getTodo());
            if(challengeUserRequest.getTodo() == "done") {
                Long tmp_people = challengeOpt.get().getPeopleCnt();
                challengeOpt.get().setPeopleCnt(tmp_people + 1);
            }
            result.data = challengeOpt.get();
            result.status = true;
        }else {
            result.status = false;
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
