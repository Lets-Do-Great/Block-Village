package com.ssafy.edu.service.challenge;


import com.ssafy.edu.model.challenge.*;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.ChallengeJpaRepository;
import com.ssafy.edu.repository.ChallengeUsersJpaRepository;
import com.ssafy.edu.repository.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
            List<ChallengeListForm> challengeListFormList = new ArrayList<>();
            for(Challenge ch: challengeList){
                ChallengeListForm tmp_form = ChallengeListForm.builder()
                        .challengeId(ch.getId())
                        .title(ch.getTitle())
                        .Image(ch.getImage())
                        .StartDate(ch.getStartDate())
                        .EndDate(ch.getEndDate())
                        .peopleCnt(ch.getPeopleCnt())
                        .build();
                challengeListFormList.add(tmp_form);
            }
            result.data = challengeListFormList;
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
            List<ChallengeListForm> challengeListFormList = new ArrayList<>();
            for(ChallengeUser ch: challengeList){
                Challenge tmp_challenge = ch.getChallenge();
                ChallengeListForm tmp_form = ChallengeListForm.builder()
                        .challengeId(tmp_challenge.getId())
                        .title(tmp_challenge.getTitle())
                        .Image(tmp_challenge.getImage())
                        .StartDate(tmp_challenge.getStartDate())
                        .EndDate(tmp_challenge.getEndDate())
                        .peopleCnt(tmp_challenge.getPeopleCnt())
                        .build();
                challengeListFormList.add(tmp_form);
            }
            result.data = challengeListFormList;
            result.status = true;
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        result.status = false;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<ChallengeResponse> joinChallenge(ChallengeUserRequest challengeUserRequest, Long challengeId) {
        ChallengeResponse result = new ChallengeResponse();
        Optional<User> userOpt = userJpaRepository.findByEmail(challengeUserRequest.getEmail());
        Optional<Challenge> challengeOpt = challengeJpaRepository.findById(challengeId);
        if(userOpt.isPresent()){
            ChallengeUser challengeUser = ChallengeUser.builder()
                    .user(userOpt.get())
                    .challenge(challengeOpt.get())
                    .done(challengeUserRequest.getTodo())
                    .build();
            ChallengeUser save = challengeUsersJpaRepository.save(challengeUser);

            ChallengeListForm tmp_form = ChallengeListForm.builder()
                    .challengeId(challengeOpt.get().getId())
                    .title(challengeOpt.get().getTitle())
                    .Image(challengeOpt.get().getImage())
                    .StartDate(challengeOpt.get().getStartDate())
                    .EndDate(challengeOpt.get().getEndDate())
                    .peopleCnt(challengeOpt.get().getPeopleCnt())
                    .build();
            if(challengeUserRequest.getTodo() == "done") {
                Long tmp_people = tmp_form.getPeopleCnt();
                tmp_form.setPeopleCnt(tmp_people + 1);
            }

            result.data = tmp_form;
            result.status = true;
        }else {
            result.status = false;
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
