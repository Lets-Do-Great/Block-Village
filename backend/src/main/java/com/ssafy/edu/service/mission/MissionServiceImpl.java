package com.ssafy.edu.service.mission;

import com.ssafy.edu.model.mission.*;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.model.user.UserResponse;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.repository.mission.MissionJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MissionServiceImpl implements MissionService {

    @Autowired
    MissionJpaRepository missionJpaRepository;

    @Autowired
    UserJpaRepository userJpaRepository;

    @Override
    public ResponseEntity<MissionResponse> findAll(MissionSearchTypeRequest missionSearchTypeRequest) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();

        List<Mission> missionList = new ArrayList<>();

        if(missionSearchTypeRequest.getKeywordType().equals("title")){
            if(missionSearchTypeRequest.getSortType().equals("increase")) {
                missionList = missionJpaRepository.findByTitleContaining(missionSearchTypeRequest.getKeyword(),Sort.by(missionSearchTypeRequest.getSearchType()));
            }else if(missionSearchTypeRequest.getSortType().equals("decrease")){
                missionList = missionJpaRepository.findByTitleContaining(missionSearchTypeRequest.getKeyword(),Sort.by(missionSearchTypeRequest.getSearchType()).descending());
            }
        }else if(missionSearchTypeRequest.getKeywordType().equals("user")){
            if(missionSearchTypeRequest.getSortType().equals("increase")) {
                missionList = missionJpaRepository.findByUserNickname(missionSearchTypeRequest.getKeyword(),Sort.by(missionSearchTypeRequest.getSearchType()));
            }else if(missionSearchTypeRequest.getSortType().equals("decrease")){
                missionList = missionJpaRepository.findByUserNickname(missionSearchTypeRequest.getKeyword(),Sort.by(missionSearchTypeRequest.getSearchType()).descending());
            }
        }

        if (missionList.size() > 0) {
            result.status = true;
            result.data = missionList;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionResponse> findById(Long missionId) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();

        Optional<Mission> missionOptional = missionJpaRepository.findById(missionId);
        if (missionOptional.isPresent()) {
            result.status = true;
            result.data = missionOptional.get();
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionResponse> findByUserId(Long userId) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail("ssafy2@ssafy2.com");
        if (userOptional.isPresent()) {
            result.status = true;
            result.data = userOptional.get().getMissionList();
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionResponse> signUpMission(MissionSignUpRequest missionSignUpRequest) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();
        Optional<User> userOptional = userJpaRepository.findByEmail(missionSignUpRequest.getEmail());

        Mission mission = new Mission().builder().title(missionSignUpRequest.getTitle()).content(missionSignUpRequest.getContent()).code(missionSignUpRequest.getCode()).created_at(LocalDate.now()).updated_at(LocalDate.now()).user(userOptional.get()).build();
        if (userOptional.isPresent()) {
            System.out.println(" 등록 잘됐나요?= "+mission.getUser().getNickname());
            result.status = true;
            Mission missionResult = missionJpaRepository.save(mission);
            result.data = missionResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionResponse> updateMission(MissionUpdateRequest missionUpdateRequest) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();
        Optional<User> userOptional = userJpaRepository.findByEmail(missionUpdateRequest.getEmail());

        Mission mission = new Mission().builder().title(missionUpdateRequest.getTitle()).content(missionUpdateRequest.getContent()).code(missionUpdateRequest.getCode()).updated_at(LocalDate.now()).user(userOptional.get()).build();
        Mission missionResult = missionJpaRepository.save(mission);
        if (userOptional.isPresent() && missionResult != null) {
            result.status = true;
            result.data = missionResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionResponse> deleteMission(Long missionId) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();

        Optional<Mission> missionOptional = missionJpaRepository.findById(missionId);

        if (missionOptional.isPresent()) {
            System.out.println("missionOptional.get() = " + missionOptional.get());
            missionJpaRepository.delete(missionOptional.get());
            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }
}
