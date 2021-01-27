package com.ssafy.edu.service.mission;

import com.ssafy.edu.model.mission.*;
import org.springframework.http.ResponseEntity;

public interface MissionService {
    public ResponseEntity<MissionResponse> findAll(MissionSearchTypeRequest missionSearchTypeRequest);
    public ResponseEntity<MissionOneResponse> findGetOne(MissionOneRequest missionOneRequest);
    public ResponseEntity<MissionResponse> findGetOneByUserId(String userEmail);
    public ResponseEntity<MissionOneResponse> signUpMission(MissionSignUpRequest missionSignUpRequest);
    public ResponseEntity<MissionOneResponse> updateMission(MissionUpdateRequest missionUpdateRequest);
    public ResponseEntity<MissionResponse> deleteMission(Long missionId);
    public ResponseEntity<MissionFavoriteResponse> MissionFavorite(MissionFavoriteRequest missionLikeRequest);
    public ResponseEntity<MissionDifficultyResponse> difficultyMission(MissionDifficultRequest missionDifficultRequest);
    public ResponseEntity<MissionResponse> MissionTodo(MissionTodoRequest missionTodoRequest);
}