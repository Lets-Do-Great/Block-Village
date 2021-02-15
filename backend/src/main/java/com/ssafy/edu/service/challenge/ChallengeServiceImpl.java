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

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
    public ResponseEntity<ChallengeResponse> getChallengeList(String email) throws ParseException {
        ChallengeResponse result = new ChallengeResponse();
        Optional<User> userOpt = userJpaRepository.findByEmail(email);
        List<Challenge> challengeList = challengeJpaRepository.findAllByOrderByIdDesc();

        SimpleDateFormat formatt = new SimpleDateFormat("yyyy-MM-dd");
        String todate = formatt.format(new Date());

        if(userOpt.isPresent()){
            List<ChallengeForm> challengeFormList = new ArrayList<>();
            if(!challengeList.isEmpty()) {
                for (Challenge ch : challengeList) {
                    Optional<ChallengeUser> tmp_challengers = challengeUsersJpaRepository.findByChallengeAndUser(ch, userOpt.get());

                    Date todate_date = formatt.parse(todate);
                    Date end_date = formatt.parse(ch.getEndDate());
                    Date start_date = formatt.parse(ch.getStartDate());

                    if (tmp_challengers.isPresent()) {
                        ChallengeForm tmp_form = ChallengeForm.builder()
                                .challengeId(ch.getId())
                                .title(ch.getTitle())
                                .image(ch.getImage())
                                .startDate(ch.getStartDate())
                                .endDate(ch.getEndDate())
                                .peopleCnt(ch.getPeopleCnt())
                                .finish(ch.getFinish())
                                .todo(tmp_challengers.get().getDone())
                                .startPositionX(ch.getStartPositionX())
                                .startPositionY(ch.getStartPositionY())
                                .endPositionX(ch.getEndPositionX())
                                .endPositionY(ch.getEndPositionY())
                                .build();

                        if (todate_date.getTime() > end_date.getTime() || start_date.getTime() > todate_date.getTime()) {
                            tmp_form.setTodo("disable");
                        }
                        challengeFormList.add(tmp_form);
                    } else {
                        ChallengeForm tmp_form = ChallengeForm.builder()
                                .challengeId(ch.getId())
                                .title(ch.getTitle())
                                .image(ch.getImage())
                                .startDate(ch.getStartDate())
                                .endDate(ch.getEndDate())
                                .peopleCnt(ch.getPeopleCnt())
                                .finish(ch.getFinish())
                                .todo("")
                                .startPositionX(ch.getStartPositionX())
                                .startPositionY(ch.getStartPositionY())
                                .endPositionX(ch.getEndPositionX())
                                .endPositionY(ch.getEndPositionY())
                                .build();

                        if (todate_date.getTime() > end_date.getTime() || start_date.getTime() > todate_date.getTime()) {
                            tmp_form.setTodo("disable");
                        }

                        challengeFormList.add(tmp_form);
                    }
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

        if(userOpt.isPresent()) {
            List<ChallengeUser> challengeList = challengeUsersJpaRepository.findByUserAndDoneOrderByIdDesc(userOpt.get(), todo);
            List<ChallengeListForm> challengeListFormList = new ArrayList<>();

            if (!challengeList.isEmpty()) {
                for (ChallengeUser ch : challengeList) {
                    Challenge tmpChallenge = ch.getChallenge();

                    ChallengeListForm tmpForm = ChallengeListForm.builder()
                            .challengeId(tmpChallenge.getId())
                            .title(tmpChallenge.getTitle())
                            .image(tmpChallenge.getImage())
                            .startDate(tmpChallenge.getStartDate())
                            .endDate(tmpChallenge.getEndDate())
                            .peopleCnt(tmpChallenge.getPeopleCnt())
                            .finish(tmpChallenge.getFinish())
                            .startPositionX(tmpChallenge.getStartPositionX())
                            .startPositionY(tmpChallenge.getStartPositionY())
                            .endPositionX(tmpChallenge.getEndPositionX())
                            .endPositionY(tmpChallenge.getEndPositionY())
                            .build();

                    challengeListFormList.add(tmpForm);
                }
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
        SimpleDateFormat formatt = new SimpleDateFormat("yyyy-MM-dd");
        String todate = formatt.format(new Date());

        ChallengeResponse result = new ChallengeResponse();
        Optional<User> userOpt = userJpaRepository.findByEmail(challengeUserRequest.getEmail());
        Optional<Challenge> challengeOpt = challengeJpaRepository.findById(challengeId);

        List<Challenge> AllChallengeList = challengeJpaRepository.findAllByOrderByIdDesc();

        List<ChallengeForm> challengeList = new ArrayList<>();
        ChallengeJoinForm ret = new ChallengeJoinForm();

        if(userOpt.isPresent() && challengeOpt.isPresent()){
            if(!challengeOpt.get().getFinish()){
                result.status = false;
            }
            // selectedChallenge 생성
            Optional<ChallengeUser> challengeUserOpt = challengeUsersJpaRepository.findByChallengeAndUser(challengeOpt.get(), userOpt.get());

            if(challengeUserOpt.isEmpty()) {
                ChallengeUser challengeUser = ChallengeUser.builder()
                        .user(userOpt.get())
                        .challenge(challengeOpt.get())
                        .done(challengeUserRequest.getTodo())
                        .build();
                challengeUsersJpaRepository.save(challengeUser);

                ChallengeForm tmpForm = ChallengeForm.builder()
                        .challengeId(challengeOpt.get().getId())
                        .title(challengeOpt.get().getTitle())
                        .image(challengeOpt.get().getImage())
                        .startDate(challengeOpt.get().getStartDate())
                        .endDate(challengeOpt.get().getEndDate())
                        .peopleCnt(challengeOpt.get().getPeopleCnt() + 1)
                        .todo(challengeUserRequest.getTodo())
                        .finish(challengeOpt.get().getFinish())
                        .startPositionX(challengeOpt.get().getStartPositionX())
                        .startPositionY(challengeOpt.get().getStartPositionY())
                        .endPositionX(challengeOpt.get().getEndPositionX())
                        .endPositionY(challengeOpt.get().getEndPositionY())
                        .build();

                challengeOpt.get().setPeopleCnt(tmpForm.getPeopleCnt());
                challengeJpaRepository.save(challengeOpt.get());

                ret.setSelectedChallenge(tmpForm);
            }
            else{
                if(challengeUserOpt.get().getDone().equals("done")){
                    result.status = false;
                }
                else{
                    challengeUserOpt.get().setDone(challengeUserRequest.getTodo());
                    challengeUsersJpaRepository.save(challengeUserOpt.get());

                    ChallengeForm tmpForm = ChallengeForm.builder()
                            .challengeId(challengeOpt.get().getId())
                            .title(challengeOpt.get().getTitle())
                            .image(challengeOpt.get().getImage())
                            .startDate(challengeOpt.get().getStartDate())
                            .endDate(challengeOpt.get().getEndDate())
                            .peopleCnt(challengeOpt.get().getPeopleCnt())
                            .todo(challengeUserRequest.getTodo())
                            .finish(challengeOpt.get().getFinish())
                            .startPositionX(challengeOpt.get().getStartPositionX())
                            .startPositionY(challengeOpt.get().getStartPositionY())
                            .endPositionX(challengeOpt.get().getEndPositionX())
                            .endPositionY(challengeOpt.get().getEndPositionY())
                            .build();
                    ret.setSelectedChallenge(tmpForm);
                }
            }

            // challengeList 생성
            for(Challenge ch: AllChallengeList){
                Optional<ChallengeUser> tmp_challengeUserOpt = challengeUsersJpaRepository.findByChallengeAndUser(ch, userOpt.get());
                ChallengeForm tmp_form;

                Date todate_date = formatt.parse(todate);
                Date end_date = formatt.parse(ch.getEndDate());
                Date start_date = formatt.parse(ch.getStartDate());

                if(tmp_challengeUserOpt.isPresent()) {
                    tmp_form = ChallengeForm.builder()
                            .challengeId(ch.getId())
                            .title(ch.getTitle())
                            .image(ch.getImage())
                            .startDate(ch.getStartDate())
                            .endDate(ch.getEndDate())
                            .peopleCnt(ch.getPeopleCnt())
                            .finish(ch.getFinish())
                            .todo(tmp_challengeUserOpt.get().getDone())
                            .startPositionX(ch.getStartPositionX())
                            .startPositionY(ch.getStartPositionY())
                            .endPositionX(ch.getEndPositionX())
                            .endPositionY(ch.getEndPositionY())
                            .build();
                }
                else{
                    tmp_form = ChallengeForm.builder()
                            .challengeId(ch.getId())
                            .title(ch.getTitle())
                            .image(ch.getImage())
                            .startDate(ch.getStartDate())
                            .endDate(ch.getEndDate())
                            .peopleCnt(ch.getPeopleCnt())
                            .finish(ch.getFinish())
                            .todo("")
                            .startPositionX(ch.getStartPositionX())
                            .startPositionY(ch.getStartPositionY())
                            .endPositionX(ch.getEndPositionX())
                            .endPositionY(ch.getEndPositionY())
                            .build();
                }
                if (todate_date.getTime() > end_date.getTime() || start_date.getTime() > todate_date.getTime()) {
                    tmp_form.setTodo("disable");
                }
                challengeList.add(tmp_form);
            }
            ret.setChallengeList(challengeList);
            result.data = ret;
            result.status = true;
        }else {
            result.status = false;
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}