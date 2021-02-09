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
    public ResponseEntity<ChallengeResponse> getChallengeList(String email){
        Optional<User> userOpt = userJpaRepository.findByEmail(email);
        ChallengeResponse result = new ChallengeResponse();
        List<Challenge> challengeList = challengeJpaRepository.findAll();
        if(!challengeList.isEmpty() && userOpt.isPresent()){
            List<ChallengeForm> challengeFormList = new ArrayList<>();
            for(Challenge ch: challengeList){
                Optional<ChallengeUser> tmp_challengeuser = challengeUsersJpaRepository.findByUserAndChallenge(userOpt.get(), ch);
                ChallengeForm tmp_form = ChallengeForm.builder()
                        .challengeId(ch.getId())
                        .title(ch.getTitle())
                        .image(ch.getImage())
                        .startDate(ch.getStartDate())
                        .endDate(ch.getEndDate())
                        .peopleCnt(ch.getPeopleCnt())
                        .finish(ch.getFinish())
                        .todo(tmp_challengeuser.get().getDone())
                        .build();
                challengeFormList.add(tmp_form);
            }
            result.data = challengeFormList;
            result.status = true;
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        result.status = false;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<ChallengeResponse> getUserChallengeList(String email, String todo) {
        ChallengeResponse result = new ChallengeResponse();
        Optional<User> userOpt = userJpaRepository.findByEmail(email);
        List<ChallengeUser> challengeList = challengeUsersJpaRepository.findByUserAndDone(userOpt.get(), todo);
        if(!challengeList.isEmpty()){
            List<ChallengeListForm> challengeListFormList = new ArrayList<>();
            for(ChallengeUser ch: challengeList){
                Challenge tmp_challenge = ch.getChallenge();
                ChallengeListForm tmp_form = ChallengeListForm.builder()
                        .challengeId(tmp_challenge.getId())
                        .title(tmp_challenge.getTitle())
                        .image(tmp_challenge.getImage())
                        .startDate(tmp_challenge.getStartDate())
                        .endDate(tmp_challenge.getEndDate())
                        .peopleCnt(tmp_challenge.getPeopleCnt())
                        .finish(tmp_challenge.getFinish())
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
        if(userOpt.isPresent() && !challengeOpt.get().getFinish()){
            ChallengeUser challengeUser = ChallengeUser.builder()
                    .user(userOpt.get())
                    .challenge(challengeOpt.get())
                    .done(challengeUserRequest.getTodo())
                    .build();
            ChallengeUser save = challengeUsersJpaRepository.save(challengeUser);

            ChallengeListForm tmp_form = ChallengeListForm.builder()
                    .challengeId(challengeOpt.get().getId())
                    .title(challengeOpt.get().getTitle())
                    .image(challengeOpt.get().getImage())
                    .startDate(challengeOpt.get().getStartDate())
                    .endDate(challengeOpt.get().getEndDate())
                    .peopleCnt(challengeOpt.get().getPeopleCnt())
                    .finish(challengeOpt.get().getFinish())
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
