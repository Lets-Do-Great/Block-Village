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
        ChallengeResponse result = new ChallengeResponse();
        Optional<User> userOpt = userJpaRepository.findByEmail(email);
        List<Challenge> challengeList = challengeJpaRepository.findAll();

        if(!challengeList.isEmpty() && userOpt.isPresent()){
            List<ChallengeForm> challengeFormList = new ArrayList<>();
            for(Challenge ch: challengeList){
                Optional<ChallengeUser> tmp_challengers = challengeUsersJpaRepository.findByChallengeAndUser(ch, userOpt.get());

                if(tmp_challengers.isPresent()) {
                    ChallengeForm tmp_form = ChallengeForm.builder()
                            .challengeId(ch.getId())
                            .title(ch.getTitle())
                            .image(ch.getImage())
                            .startDate(ch.getStartDate())
                            .endDate(ch.getEndDate())
                            .peopleCnt(ch.getPeopleCnt())
                            .finish(ch.getFinish())
                            .todo(tmp_challengers.get().getDone())
                            .build();
                    challengeFormList.add(tmp_form);
                }
                else{
                    ChallengeForm tmp_form = ChallengeForm.builder()
                            .challengeId(ch.getId())
                            .title(ch.getTitle())
                            .image(ch.getImage())
                            .startDate(ch.getStartDate())
                            .endDate(ch.getEndDate())
                            .peopleCnt(ch.getPeopleCnt())
                            .finish(ch.getFinish())
                            .todo("")
                            .build();
                    challengeFormList.add(tmp_form);
                }
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
                Challenge tmpChallenge = ch.getChallenge();
                ChallengeListForm tmpForm = ChallengeListForm.builder()
                        .challengeId(tmpChallenge.getId())
                        .title(tmpChallenge.getTitle())
                        .image(tmpChallenge.getImage())
                        .startDate(tmpChallenge.getStartDate())
                        .endDate(tmpChallenge.getEndDate())
                        .peopleCnt(tmpChallenge.getPeopleCnt())
                        .finish(tmpChallenge.getFinish())
                        .build();
                challengeListFormList.add(tmpForm);
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


        if(userOpt.isPresent() && challengeOpt.isPresent()){
            Optional<ChallengeUser> challengeUserOpt = challengeUsersJpaRepository.findByChallengeAndUser(challengeOpt.get(), userOpt.get());
            if(!challengeOpt.get().getFinish()){
                result.status = false;
            }
            if(challengeUserOpt.isEmpty()) {
                ChallengeUser challengeUser = ChallengeUser.builder()
                        .user(userOpt.get())
                        .challenge(challengeOpt.get())
                        .done(challengeUserRequest.getTodo())
                        .build();
                ChallengeUser save = challengeUsersJpaRepository.save(challengeUser);

                ChallengeListForm tmpForm = ChallengeListForm.builder()
                        .challengeId(challengeOpt.get().getId())
                        .title(challengeOpt.get().getTitle())
                        .image(challengeOpt.get().getImage())
                        .startDate(challengeOpt.get().getStartDate())
                        .endDate(challengeOpt.get().getEndDate())
                        .peopleCnt(challengeOpt.get().getPeopleCnt() + 1)
                        .finish(challengeOpt.get().getFinish())
                        .build();

                challengeOpt.get().setPeopleCnt(tmpForm.getPeopleCnt());
                challengeJpaRepository.save(challengeOpt.get());


                result.data = tmpForm;
                result.status = true;
            }
            else{
                if(challengeUserOpt.get().getDone().equals("done")){
                    result.status = false;
                }
                else{
                    challengeUserOpt.get().setDone(challengeUserRequest.getTodo());
                    ChallengeUser save = challengeUsersJpaRepository.save(challengeUserOpt.get());

                    result.data = ChallengeListForm.builder()
                            .challengeId(challengeOpt.get().getId())
                            .title(challengeOpt.get().getTitle())
                            .image(challengeOpt.get().getImage())
                            .startDate(challengeOpt.get().getStartDate())
                            .endDate(challengeOpt.get().getEndDate())
                            .peopleCnt(challengeOpt.get().getPeopleCnt())
                            .finish(challengeOpt.get().getFinish())
                            .build();
                    result.status = true;
                }
            }
        }else {
            result.status = false;
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
