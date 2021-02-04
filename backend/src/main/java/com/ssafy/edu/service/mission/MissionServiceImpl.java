package com.ssafy.edu.service.mission;

import com.ssafy.edu.model.mission.*;
import com.ssafy.edu.model.mission.Request.*;
import com.ssafy.edu.model.mission.Response.*;
import com.ssafy.edu.model.mission.Response.responseModel.findAllModel;
import com.ssafy.edu.model.mission.Response.responseModel.findOneModel;
import com.ssafy.edu.model.mission.Response.responseModel.pageModel;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.repository.mission.MissionDifficultyJpaRepository;
import com.ssafy.edu.repository.mission.MissionJpaRepository;
import com.ssafy.edu.repository.mission.MissionFavoriteJpaRepository;
import com.ssafy.edu.repository.mission.MissionTodoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

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
    public ResponseEntity<MissionPageResponse> findAll(MissionSearchTypeRequest missionSearchTypeRequest) {
        ResponseEntity response;
        MissionPageResponse result = new MissionPageResponse();
        List<Object> resultObject = new ArrayList<>();
        Page<Mission> missionList = null;


        if (missionSearchTypeRequest.getKeywordType().equals("title")) {
            if (missionSearchTypeRequest.getSortType().equals("increase")) {
                missionList = missionJpaRepository.findByTitleContaining(missionSearchTypeRequest.getKeyword(), PageRequest.of(missionSearchTypeRequest.getPageNum(), 20, Sort.by(missionSearchTypeRequest.getSearchType())));
            } else if (missionSearchTypeRequest.getSortType().equals("decrease")) {
                missionList = missionJpaRepository.findByTitleContaining(missionSearchTypeRequest.getKeyword(), PageRequest.of(missionSearchTypeRequest.getPageNum(), 20, Sort.by(missionSearchTypeRequest.getSearchType()).descending()));
            }
        } else if (missionSearchTypeRequest.getKeywordType().equals("user")) {
            if (missionSearchTypeRequest.getSortType().equals("increase")) {
                missionList = missionJpaRepository.findByUserNicknameContaining(missionSearchTypeRequest.getKeyword(), PageRequest.of(missionSearchTypeRequest.getPageNum(), 20, Sort.by(missionSearchTypeRequest.getSearchType())));
            } else if (missionSearchTypeRequest.getSortType().equals("decrease")) {
                missionList = missionJpaRepository.findByUserNicknameContaining(missionSearchTypeRequest.getKeyword(), PageRequest.of(missionSearchTypeRequest.getPageNum(), 20, Sort.by(missionSearchTypeRequest.getSearchType()).descending()));
            }
        }
        List<Object> findAllModelList = new ArrayList<>();
        for (Mission mission : missionList) {
            findAllModel findAllModel = new findAllModel().builder()
                    .missionId(mission.getId())
                    .email(mission.getUser().getEmail())
                    .title(mission.getTitle())
                    .difficulty(mission.getDifficulty())
                    .likeCnt(mission.getFavorite())
                    .peopleCnt(mission.getPeople())
                    .build();
            findAllModelList.add(findAllModel);
        }
        resultObject.add(findAllModelList);
        pageModel pageModel = new pageModel().builder()
                .pageisFirst(missionList.isFirst())
                .pageSize(missionList.getNumberOfElements())
                .pageNumber(missionList.getNumber())
                .pageTotalPages(missionList.getTotalPages())
                .pageTotalElements((int)missionList.getTotalElements())
                .build();
        resultObject.add(pageModel);
        result.status = true;
        result.data = resultObject;
        response = new ResponseEntity<>(result, HttpStatus.OK);
        return response;
    }

    @Override
    public ResponseEntity<MissionOneResponse> findGetOne(Long missionId, String userEmail) {
        ResponseEntity response;
        MissionOneResponse result = new MissionOneResponse();

        Optional<Mission> missionOptional = missionJpaRepository.findById(missionId);

        if (missionOptional.isPresent()) {
            Optional<MissionFavorite> missionFavorite = Optional.ofNullable(missionFavoriteJpaRepository.findByUserEmailAndMissionId(userEmail, missionId));
            Optional<MissionDoUsers> missionDoUsers = Optional.ofNullable(missionTodoJpaRepository.findByUserEmailAndMissionId(userEmail,missionId));
            findOneModel findOneModel = new findOneModel().builder()
                    .missionId(missionOptional.get().getId())
                    .email(missionOptional.get().getUser().getEmail())
                    .nickname(missionOptional.get().getUser().getNickname())
                    .title(missionOptional.get().getTitle())
                    .created_at(missionOptional.get().getCreatedAt())
                    .updated_at(missionOptional.get().getUpdatedAt())
                    .content(missionOptional.get().getContent())
                    .code(missionOptional.get().getCode())
                    .difficulty(missionOptional.get().getDifficulty())
                    .likeCnt(missionOptional.get().getFavorite())
                    .peopleCnt(missionOptional.get().getPeople())
                    .favorite(missionFavorite.orElseGet(MissionFavorite::new).isFavorite())
                    .todo(missionDoUsers.orElseGet(MissionDoUsers::new).getTodo())
                    .build();

            result.status = true;
            result.data = findOneModel;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionResponse> GetUserMissions(String userEmail) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(userEmail);

        if (userOptional.isPresent()) {
            List<findOneModel> findOneModelList = new ArrayList<>();

            for (Mission mission : missionJpaRepository.findByUserEmailOrderByUpdatedAtDesc(userEmail)) {
                Optional<MissionFavorite> missionFavorite = Optional.ofNullable(missionFavoriteJpaRepository.findByUserEmailAndMissionId(userEmail, mission.getId()));
                Optional<MissionDoUsers> missionDoUsers = Optional.ofNullable(missionTodoJpaRepository.findByUserEmailAndMissionId(userEmail,mission.getId()));
                findOneModel findOneModel = new findOneModel().builder()
                        .missionId(mission.getId())
                        .email(userOptional.get().getEmail())
                        .nickname(userOptional.get().getNickname())
                        .title(mission.getTitle())
                        .created_at(mission.getCreatedAt())
                        .updated_at(mission.getUpdatedAt())
                        .content(mission.getContent())
                        .code(mission.getCode())
                        .difficulty(mission.getDifficulty())
                        .likeCnt(mission.getFavorite())
                        .peopleCnt(mission.getPeople())
                        .favorite(missionFavorite.orElseGet(MissionFavorite::new).isFavorite())
                        .todo(missionDoUsers.orElseGet(MissionDoUsers::new).getTodo())
                        .build();
                findOneModelList.add(findOneModel);
            }
            result.status = true;
            result.data = findOneModelList;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionResponse> GetUserTodoMissions(String userEmail) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(userEmail);

        if (userOptional.isPresent()) {
            List<findOneModel> findOneModelList = new ArrayList<>();
            List<MissionDoUsers> missionDoUsersList = missionTodoJpaRepository.findByUserEmailAndTodo(userEmail,"todo");
            
            for (MissionDoUsers missionDoUsers : missionDoUsersList) {
                Mission mission = missionJpaRepository.findByIdOrderByUpdatedAtDesc(missionDoUsers.getMission().getId());

                Optional<MissionFavorite> missionFavorite = Optional.ofNullable(missionFavoriteJpaRepository.findByUserEmailAndMissionId(userEmail, mission.getId()));

                findOneModel findOneModel = new findOneModel().builder()
                        .missionId(mission.getId())
                        .email(userOptional.get().getEmail())
                        .nickname(userOptional.get().getNickname())
                        .title(mission.getTitle())
                        .created_at(mission.getCreatedAt())
                        .updated_at(mission.getUpdatedAt())
                        .content(mission.getContent())
                        .code(mission.getCode())
                        .difficulty(mission.getDifficulty())
                        .likeCnt(mission.getFavorite())
                        .peopleCnt(mission.getPeople())
                        .favorite(missionFavorite.orElseGet(MissionFavorite::new).isFavorite())
                        .todo(missionDoUsers.getTodo())
                        .build();
                findOneModelList.add(findOneModel);
            }
            result.status = true;
            result.data = findOneModelList;
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

            Mission missionResult = missionJpaRepository.save(mission);

            findOneModel findOneModel = new findOneModel().builder()
                    .missionId(missionResult.getId())
                    .email(missionResult.getUser().getEmail())
                    .nickname(missionResult.getUser().getNickname())
                    .title(missionResult.getTitle())
                    .created_at(missionResult.getCreatedAt())
                    .updated_at(missionResult.getUpdatedAt())
                    .content(missionResult.getContent())
                    .code(missionResult.getCode())
                    .difficulty(missionResult.getDifficulty())
                    .likeCnt(missionResult.getFavorite())
                    .peopleCnt(missionResult.getPeople())
                    .favorite(false)
                    .todo(null)
                    .build();
            result.status = true;
            result.data = findOneModel;
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
        if (userOptional.isPresent() && missionOptional.isPresent()) {
            Date now = new Date(System.currentTimeMillis());
            Mission mission = missionOptional.get();
            mission.setTitle(missionUpdateRequest.getTitle());
            mission.setContent(missionUpdateRequest.getContent());
            mission.setCode(missionUpdateRequest.getCode());
            mission.setUpdatedAt(now);
            Mission missionResult = missionJpaRepository.save(mission);
            Optional<MissionFavorite> missionFavorite = Optional.ofNullable(missionFavoriteJpaRepository.findByUserEmailAndMissionId(missionUpdateRequest.getEmail(), missionResult.getId()));
            Optional<MissionDoUsers> missionDoUsers = Optional.ofNullable(missionTodoJpaRepository.findByUserEmailAndMissionId(missionUpdateRequest.getEmail(),missionResult.getId()));
            findOneModel findOneModel = new findOneModel().builder()
                    .missionId(missionResult.getId())
                    .email(missionResult.getUser().getEmail())
                    .nickname(missionResult.getUser().getNickname())
                    .title(missionResult.getTitle())
                    .created_at(missionResult.getCreatedAt())
                    .updated_at(missionResult.getUpdatedAt())
                    .content(missionResult.getContent())
                    .code(missionResult.getCode())
                    .difficulty(missionResult.getDifficulty())
                    .likeCnt(missionResult.getFavorite())
                    .favorite(missionFavorite.orElseGet(MissionFavorite::new).isFavorite())
                    .todo(missionDoUsers.orElseGet(MissionDoUsers::new).getTodo())
                    .build();

            result.status = true;
            result.data = findOneModel;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<MissionResponse> deleteMission(MissionDeleteRequest missionDeleteRequest) {
        ResponseEntity response;
        MissionResponse result = new MissionResponse();

        Optional<Mission> missionOptional = missionJpaRepository.findByIdAndUserEmail(missionDeleteRequest.getMissionId(), missionDeleteRequest.getEmail());

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
        Optional<MissionFavorite> missionLikeUsersOptional = Optional.ofNullable(missionFavoriteJpaRepository.findByUserEmailAndMissionId(userOptional.get().getEmail(), missionOptional.get().getId()));

        if (missionLikeUsersOptional.isEmpty()) {
            MissionFavorite missionLikeUsers = new MissionFavorite().builder()
                    .mission(missionOptional.get())
                    .user(userOptional.get())
                    .favorite(missionLikeRequest.isFavorite())
                    .build();

            MissionFavorite missionLikeUsersResult = missionFavoriteJpaRepository.save(missionLikeUsers);
            if (missionOptional.isPresent()) {
                List<MissionFavorite> missionFavoriteList = missionFavoriteJpaRepository.findByMissionId(missionLikeRequest.getMissionId());
                missionOptional.get().setFavorite((int) missionFavoriteList.stream().filter(m -> m.isFavorite()).count());
                missionJpaRepository.save(missionOptional.get());
            }
            Optional<Mission> mission = missionJpaRepository.findById(missionLikeUsersResult.getMission().getId());
            Optional<MissionFavorite> missionFavorite = Optional.ofNullable(missionFavoriteJpaRepository.findByUserEmailAndMissionId(missionLikeUsersResult.getUser().getEmail(), missionLikeUsersResult.getMission().getId()));
            Optional<MissionDoUsers> missionDoUsers = Optional.ofNullable(missionTodoJpaRepository.findByUserEmailAndMissionId(missionLikeUsersResult.getUser().getEmail(),missionLikeUsersResult.getMission().getId()));
            findOneModel findOneModel = new findOneModel().builder()
                    .missionId(mission.get().getId())
                    .email(mission.get().getUser().getEmail())
                    .nickname(mission.get().getUser().getNickname())
                    .title(mission.get().getTitle())
                    .created_at(mission.get().getCreatedAt())
                    .updated_at(mission.get().getUpdatedAt())
                    .content(mission.get().getContent())
                    .code(mission.get().getCode())
                    .difficulty(mission.get().getDifficulty())
                    .likeCnt(mission.get().getFavorite())
                    .peopleCnt(mission.get().getPeople())
                    .favorite(missionFavorite.orElseGet(MissionFavorite::new).isFavorite())
                    .todo(missionDoUsers.orElseGet(MissionDoUsers::new).getTodo())
                    .build();

            result.status = true;
            result.data = findOneModel;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else if (missionLikeUsersOptional.isPresent()) {
            MissionFavorite missionLikeUsers = new MissionFavorite().builder()
                    .id(missionLikeUsersOptional.get().getId())
                    .mission(missionOptional.get())
                    .user(userOptional.get())
                    .favorite(missionLikeRequest.isFavorite())
                    .build();

            MissionFavorite missionLikeUsersResult = missionFavoriteJpaRepository.save(missionLikeUsers);
            if (missionOptional.isPresent()) {
                List<MissionFavorite> missionFavoriteList = missionFavoriteJpaRepository.findByMissionId(missionLikeRequest.getMissionId());
                missionOptional.get().setFavorite((int) missionFavoriteList.stream().filter(m -> m.isFavorite()).count());
                missionJpaRepository.save(missionOptional.get());
            }
            Optional<Mission> mission = missionJpaRepository.findById(missionLikeUsersResult.getMission().getId());
            Optional<MissionFavorite> missionFavorite = Optional.ofNullable(missionFavoriteJpaRepository.findByUserEmailAndMissionId(missionLikeUsersResult.getUser().getEmail(), missionLikeUsersResult.getMission().getId()));
            Optional<MissionDoUsers> missionDoUsers = Optional.ofNullable(missionTodoJpaRepository.findByUserEmailAndMissionId(missionLikeUsersResult.getUser().getEmail(),missionLikeUsersResult.getMission().getId()));
            findOneModel findOneModel = new findOneModel().builder()
                    .missionId(mission.get().getId())
                    .email(mission.get().getUser().getEmail())
                    .nickname(mission.get().getUser().getNickname())
                    .title(mission.get().getTitle())
                    .created_at(mission.get().getCreatedAt())
                    .updated_at(mission.get().getUpdatedAt())
                    .content(mission.get().getContent())
                    .code(mission.get().getCode())
                    .difficulty(mission.get().getDifficulty())
                    .likeCnt(mission.get().getFavorite())
                    .peopleCnt(mission.get().getPeople())
                    .favorite(missionFavorite.orElseGet(MissionFavorite::new).isFavorite())
                    .todo(missionDoUsers.orElseGet(MissionDoUsers::new).getTodo())
                    .build();

            result.status = true;
            result.data = findOneModel;
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
        Optional<MissionDifficulty> missionDifficultyOptional = Optional.ofNullable(missionDifficultyJpaRepository.findByUserEmailAndMissionId(userOptional.get().getEmail(), missionOptional.get().getId()));

        if (missionDifficultyOptional.isEmpty()) {
            MissionDifficulty missionDifficulty = new MissionDifficulty().builder()
                    .mission(missionOptional.get())
                    .user(userOptional.get())
                    .difficulty(missionDifficultRequest.getDifficulty())
                    .build();

            missionDifficultyJpaRepository.save(missionDifficulty);
            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else if (missionDifficultyOptional.isPresent()) {
            MissionDifficulty missionDifficulty = new MissionDifficulty().builder()
                    .id(missionDifficultyOptional.get().getId())
                    .mission(missionDifficultyOptional.get().getMission())
                    .user(missionDifficultyOptional.get().getUser())
                    .difficulty(missionDifficultRequest.getDifficulty())
                    .build();

            missionDifficultyJpaRepository.save(missionDifficulty);
            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        List<MissionDifficulty> missionDifficultyCalculation = missionDifficultyJpaRepository.findByMissionId(missionOptional.get().getId());

        if (result.status && missionDifficultyCalculation.size() > 0) {
            if (missionOptional.isPresent()) {
                double temp = 0;
                for (MissionDifficulty m : missionDifficultyCalculation) {
                    temp = temp + m.getDifficulty();
                }
                double difficulty = temp / (missionDifficultyCalculation.size());
                missionOptional.get().setDifficulty(Math.round(difficulty * 10) / 10.0);
                missionJpaRepository.save(missionOptional.get());
            }
        } else if (result.status && missionDifficultyCalculation.size() == 0) {
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
        Optional<MissionDoUsers> missionDoUsersList = Optional.ofNullable(missionTodoJpaRepository.findByUserEmailAndMissionId(userOptional.get().getEmail(), missionOptional.get().getId()));
        if (missionDoUsersList.isEmpty()) {
            MissionDoUsers missionDoUsers = new MissionDoUsers();
            missionDoUsers.setMission(missionOptional.get());
            missionDoUsers.setUser(userOptional.get());
            missionDoUsers.setTodo(missionTodoRequest.getTodo());
            missionTodoJpaRepository.save(missionDoUsers);

            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else if (missionDoUsersList.isPresent()) {
            MissionDoUsers missionDoUsers = new MissionDoUsers();
            missionDoUsers.setId(missionDoUsersList.get().getId());
            missionDoUsers.setMission(missionOptional.get());
            missionDoUsers.setUser(userOptional.get());
            missionDoUsers.setTodo(missionTodoRequest.getTodo());
            missionTodoJpaRepository.save(missionDoUsers);

            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }

        List<MissionDoUsers> missionDoUsersCalculation = missionTodoJpaRepository.findByMissionId(missionOptional.get().getId());
        if (result.status && missionDoUsersCalculation.size() >= 0) {
            if (missionOptional.isPresent()) {
                missionOptional.get().setPeople(missionDoUsersCalculation.size());
                missionJpaRepository.save(missionOptional.get());
            }
        }
        return response;
    }
}
