package com.ssafy.edu.service.mission;

import com.ssafy.edu.model.mission.*;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.model.user.UserResponse;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.repository.mission.MissionDifficultyJpaRepository;
import com.ssafy.edu.repository.mission.MissionJpaRepository;
import com.ssafy.edu.repository.mission.MissionLikeUsersJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class MissionServiceImpl implements MissionService {

    @Autowired
    MissionJpaRepository missionJpaRepository;

    @Autowired
    MissionLikeUsersJpaRepository missionLikeUsersJpaRepository;

    @Autowired
    MissionDifficultyJpaRepository missionDifficultyJpaRepository;

    @Autowired
    UserJpaRepository userJpaRepository;

    @Override
    public ResponseEntity<MissionResponse> findAll(MissionSearchTypeRequest missionSearchTypeRequest) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();

        List<Mission> missionList = new ArrayList<>();


        if (missionSearchTypeRequest.getKeywordType().equals("title")) {
            if (missionSearchTypeRequest.getSortType().equals("increase")) {
                missionList = missionJpaRepository.findByTitleContaining(missionSearchTypeRequest.getKeyword(), Sort.by(missionSearchTypeRequest.getSearchType()));
            } else if (missionSearchTypeRequest.getSortType().equals("decrease")) {
                missionList = missionJpaRepository.findByTitleContaining(missionSearchTypeRequest.getKeyword(), Sort.by(missionSearchTypeRequest.getSearchType()).descending());
            }
        } else if (missionSearchTypeRequest.getKeywordType().equals("user")) {
            if (missionSearchTypeRequest.getSortType().equals("increase")) {
                missionList = missionJpaRepository.findByUserNickname(missionSearchTypeRequest.getKeyword(), Sort.by(missionSearchTypeRequest.getSearchType()));
            } else if (missionSearchTypeRequest.getSortType().equals("decrease")) {
                missionList = missionJpaRepository.findByUserNickname(missionSearchTypeRequest.getKeyword(), Sort.by(missionSearchTypeRequest.getSearchType()).descending());
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
        Date now = new Date(System.currentTimeMillis());
        Mission mission = new Mission().builder().title(missionSignUpRequest.getTitle()).content(missionSignUpRequest.getContent()).code(missionSignUpRequest.getCode()).created_at(now).updated_at(now).user(userOptional.get()).build();
        if (userOptional.isPresent()) {
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
        Date now = new Date(System.currentTimeMillis());
        Mission mission = new Mission().builder().title(missionUpdateRequest.getTitle()).content(missionUpdateRequest.getContent()).code(missionUpdateRequest.getCode()).updated_at(now).user(userOptional.get()).difficulty(0).build();
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
            missionJpaRepository.delete(missionOptional.get());
            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionLikeUsersResponse> likeMission(MissionLikeRequest missionLikeRequest) {
        ResponseEntity response;
        MissionLikeUsersResponse result = new MissionLikeUsersResponse();

        Optional<Mission> missionOptional = missionJpaRepository.findById(missionLikeRequest.getMissionId());
        Optional<User> userOptional = userJpaRepository.findByEmail(missionLikeRequest.getEmail());
        List<MissionLikeUsers> missionLikeUsersOptional = missionLikeUsersJpaRepository.findByUserEmailAndMissionId(userOptional.get().getEmail(), missionOptional.get().getId());
        if (missionLikeUsersOptional.size() == 0) {
            MissionLikeUsers missionLikeUsers = new MissionLikeUsers();
            missionLikeUsers.setMission(missionOptional.get());
            missionLikeUsers.setUser(userOptional.get());
            if (missionLikeRequest.isLike()) {
                missionLikeUsers.setMissionlike(true);
            } else {
                missionLikeUsers.setMissionlike(false);
            }
            MissionLikeUsers missionLikeUsersResult = missionLikeUsersJpaRepository.save(missionLikeUsers);
            result.status = true;
            result.data = missionLikeUsersResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else if (missionLikeUsersOptional.size() == 1) {
            MissionLikeUsers missionLikeUsers = new MissionLikeUsers();
            missionLikeUsers.setId(missionLikeUsersOptional.get(0).getId());
            missionLikeUsers.setMission(missionOptional.get());
            missionLikeUsers.setUser(userOptional.get());
            if (missionLikeRequest.isLike()) {
                missionLikeUsers.setMissionlike(true);
            } else {
                missionLikeUsers.setMissionlike(false);
            }
            MissionLikeUsers missionLikeUsersResult = missionLikeUsersJpaRepository.save(missionLikeUsers);
            result.status = true;
            result.data = missionLikeUsersResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionDifficultyResponse> difficultyMission(MissionDifficultRequest missionDifficultRequest) {

        ResponseEntity response;
        MissionDifficultyResponse result = new MissionDifficultyResponse();

        Optional<Mission> missionOptional = missionJpaRepository.findById(missionDifficultRequest.getMissionId());
        Optional<User> userOptional = userJpaRepository.findByEmail(missionDifficultRequest.getEmail());
        List<MissionDifficulty> missionDifficultyList = missionDifficultyJpaRepository.findByUserEmailAndMissionId(userOptional.get().getEmail(), missionOptional.get().getId());
        List<MissionDifficulty> missionDifficultyCalculation = missionDifficultyJpaRepository.findByMissionId(missionOptional.get().getId());

        if (missionDifficultyList.size() == 0) {
            MissionDifficulty missionDifficulty = new MissionDifficulty();
            missionDifficulty.setMission(missionOptional.get());
            missionDifficulty.setUser(userOptional.get());
            missionDifficulty.setDifficulty(missionDifficultRequest.getDifficulty());

            MissionDifficulty missionDifficultyResult = missionDifficultyJpaRepository.save(missionDifficulty);
            result.status = true;
            result.data = missionDifficultyResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else if (missionDifficultyList.size() == 1) {
            MissionDifficulty missionDifficulty = new MissionDifficulty();
            missionDifficulty.setId(missionDifficultyList.get(0).getId());
            missionDifficulty.setMission(missionOptional.get());
            missionDifficulty.setUser(userOptional.get());
            missionDifficulty.setDifficulty(missionDifficultRequest.getDifficulty());

            MissionDifficulty missionDifficultyResult = missionDifficultyJpaRepository.save(missionDifficulty);
            result.status = true;
            result.data = missionDifficultyResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }

        if (result.status&&missionDifficultyCalculation.size() > 0) {
            if (missionOptional.isPresent()) {
                double temp = missionDifficultRequest.getDifficulty();
                for (MissionDifficulty m : missionDifficultyCalculation) {
                    temp = temp + m.getDifficulty();
                }
                double difficulty = temp / (missionDifficultyCalculation.size() + 1);
                missionOptional.get().setDifficulty(Math.round(difficulty*10)/10.0);
                missionJpaRepository.save(missionOptional.get());
            }
        } else if(result.status&&missionDifficultyCalculation.size()==0) {
            if (missionOptional.isPresent()) {
                missionOptional.get().setDifficulty(missionDifficultRequest.getDifficulty());
                missionJpaRepository.save(missionOptional.get());
            }
        }

        return response;
    }
}
