package com.ssafy.edu.service.mission;

import com.ssafy.edu.model.mission.*;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.repository.mission.MissionDifficultyJpaRepository;
import com.ssafy.edu.repository.mission.MissionJpaRepository;
import com.ssafy.edu.repository.mission.MissionFavoriteJpaRepository;
import com.ssafy.edu.repository.mission.MissionTodoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class MissionServiceImpl implements MissionService {

    @Autowired
    MissionJpaRepository missionJpaRepository;

    @Autowired
    MissionFavoriteJpaRepository missionFavoriteJpaRepository;

    @Autowired
    MissionDifficultyJpaRepository missionDifficultyJpaRepository;

    @Autowired
    MissionTodoJpaRepository missionTodoJpaRepository;

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
    public ResponseEntity<MissionOneResponse> findGetOne(MissionOneRequest missionOneRequest) {
        ResponseEntity response;
        MissionOneResponse result = new MissionOneResponse();

        Optional<Mission> missionOptional = missionJpaRepository.findById(missionOneRequest.getMissionId());

        if (missionOptional.isPresent()) {
            List<MissionFavorite> missionFavoriteList = missionFavoriteJpaRepository.findByUserEmailAndMissionId(missionOneRequest.getEmail(),missionOneRequest.getMissionId());
            List<Object> object = new ArrayList<>();
            object.add(missionOptional.get());
            if(missionFavoriteList.size()>0){
                object.add(missionFavoriteList.get(0));
            }else {
                MissionFavorite missionFavorite = new MissionFavorite();
                object.add(missionFavorite);
            }
            result.status = true;
            result.data = object;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionResponse> findGetOneByUserId(String userEmail) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(userEmail);

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
    public ResponseEntity<MissionOneResponse> signUpMission(MissionSignUpRequest missionSignUpRequest) {
        ResponseEntity response;
        MissionOneResponse result = new MissionOneResponse();
        Optional<User> userOptional = userJpaRepository.findByEmail(missionSignUpRequest.getEmail());
        if (userOptional.isPresent()) {
            Date now = new Date(System.currentTimeMillis());
            Mission mission = new Mission().builder()
                    .title(missionSignUpRequest.getTitle())
                    .content(missionSignUpRequest.getContent())
                    .code(missionSignUpRequest.getCode())
                    .createdAt(now)
                    .updatedAt(now)
                    .user(userOptional.get())
                    .favorite(0)
                    .people(0)
                    .build();
            result.status = true;
            Mission missionResult = missionJpaRepository.save(mission);
            MissionFavorite missionFavorite = new MissionFavorite();
            List<Object> object = new ArrayList<>();
            object.add(missionResult);
            object.add(missionFavorite);
            result.data = object;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionOneResponse> updateMission(MissionUpdateRequest missionUpdateRequest) {
        ResponseEntity response;
        MissionOneResponse result = new MissionOneResponse();
        Optional<User> userOptional = userJpaRepository.findByEmail(missionUpdateRequest.getEmail());
        Optional<Mission> missionOptional = missionJpaRepository.findById(missionUpdateRequest.getMissionId());
        if (userOptional.isPresent()&&missionOptional.isPresent()) {
            Date now = new Date(System.currentTimeMillis());
            Mission mission = missionOptional.get();
            mission.setTitle(missionUpdateRequest.getTitle());
            mission.setContent(missionUpdateRequest.getContent());
            mission.setCode(missionUpdateRequest.getCode());
            mission.setUpdatedAt(now);
            Mission missionResult = missionJpaRepository.save(mission);
            List<MissionFavorite> missionFavoriteList = missionFavoriteJpaRepository.findByUserEmailAndMissionId(missionUpdateRequest.getEmail(),missionUpdateRequest.getMissionId());
            List<Object> object = new ArrayList<>();
            object.add(missionResult);
            if(missionFavoriteList.size()>0){
                object.add(missionFavoriteList.get(0));
            }else {
                MissionFavorite missionFavorite = new MissionFavorite();
                object.add(missionFavorite);
            }
            result.status = true;
            result.data = object;
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
    public ResponseEntity<MissionFavoriteResponse> MissionFavorite(MissionFavoriteRequest missionLikeRequest) {
        ResponseEntity response;
        MissionFavoriteResponse result = new MissionFavoriteResponse();

        Optional<Mission> missionOptional = missionJpaRepository.findById(missionLikeRequest.getMissionId());
        Optional<User> userOptional = userJpaRepository.findByEmail(missionLikeRequest.getEmail());
        List<MissionFavorite> missionLikeUsersOptional = missionFavoriteJpaRepository.findByUserEmailAndMissionId(userOptional.get().getEmail(), missionOptional.get().getId());
        if (missionLikeUsersOptional.size() == 0) {
            MissionFavorite missionLikeUsers = new MissionFavorite();
            missionLikeUsers.setMission(missionOptional.get());
            missionLikeUsers.setUser(userOptional.get());
            if (missionLikeRequest.isFavorite()) {
                missionLikeUsers.setFavorite(true);
            } else {
                missionLikeUsers.setFavorite(false);
            }
            MissionFavorite missionLikeUsersResult = missionFavoriteJpaRepository.save(missionLikeUsers);
            result.status = true;
            result.data = missionLikeUsersResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else if (missionLikeUsersOptional.size() == 1) {
            MissionFavorite missionLikeUsers = new MissionFavorite();
            missionLikeUsers.setId(missionLikeUsersOptional.get(0).getId());
            missionLikeUsers.setMission(missionOptional.get());
            missionLikeUsers.setUser(userOptional.get());
            if (missionLikeRequest.isFavorite()) {
                missionLikeUsers.setFavorite(true);
            } else {
                missionLikeUsers.setFavorite(false);
            }
            MissionFavorite missionLikeUsersResult = missionFavoriteJpaRepository.save(missionLikeUsers);
            result.status = true;
            result.data = missionLikeUsersResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        if(missionOptional.isPresent()){
            List<MissionFavorite> missionFavoriteList = missionFavoriteJpaRepository.findByMissionId(missionLikeRequest.getMissionId());
            int favor=0;
            for(MissionFavorite m : missionFavoriteList){
                if(m.isFavorite()){
                    favor++;
                }
            }
            missionOptional.get().setFavorite(favor);
            missionJpaRepository.save(missionOptional.get());
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

    @Override
    public ResponseEntity<MissionResponse> MissionTodo(MissionTodoRequest missionTodoRequest) {
        ResponseEntity response;
        MissionTodoResponse result = new MissionTodoResponse();

        Optional<Mission> missionOptional = missionJpaRepository.findById(missionTodoRequest.getMissionId());
        Optional<User> userOptional = userJpaRepository.findByEmail(missionTodoRequest.getEmail());
        List<MissionDoUsers> missionDoUsersList = missionTodoJpaRepository.findByUserEmailAndMissionId(userOptional.get().getEmail(), missionOptional.get().getId());
        if (missionDoUsersList.size() == 0) {
            MissionDoUsers missionDoUsers = new MissionDoUsers();
            missionDoUsers.setMission(missionOptional.get());
            missionDoUsers.setUser(userOptional.get());
            missionDoUsers.setTodo(missionTodoRequest.getTodo());
            MissionDoUsers missionDoUserResult = missionTodoJpaRepository.save(missionDoUsers);
            result.status = true;
            result.data = missionDoUserResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else if (missionDoUsersList.size() == 1) {

            MissionDoUsers missionDoUsers = new MissionDoUsers();
            missionDoUsers.setId(missionDoUsersList.get(0).getId());
            missionDoUsers.setMission(missionOptional.get());
            missionDoUsers.setUser(userOptional.get());
            missionDoUsers.setTodo(missionTodoRequest.getTodo());
            MissionDoUsers missionDoUserResult = missionTodoJpaRepository.save(missionDoUsers);

            result.status = true;
            result.data = missionDoUserResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        List<MissionDoUsers> missionDoUsersCalculation = missionTodoJpaRepository.findByMissionId(missionOptional.get().getId());
        if (result.status&&missionDoUsersCalculation.size() >= 0) {
            if (missionOptional.isPresent()) {
                missionOptional.get().setPeople(missionDoUsersCalculation.size());
                missionJpaRepository.save(missionOptional.get());
            }
        }
        return response;
    }
}
