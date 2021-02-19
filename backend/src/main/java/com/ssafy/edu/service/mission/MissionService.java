package com.ssafy.edu.service.mission;

import com.ssafy.edu.model.mission.Response.*;
import com.ssafy.edu.model.mission.Request.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface MissionService {
    public ResponseEntity<MissionPageResponse> findAll(MissionSearchTypeRequest missionSearchTypeRequest);
    public ResponseEntity<MissionOneResponse> findGetOne(Long missionId , String userEmail);
    public ResponseEntity<MissionResponse> GetUserMissions(String userEmail);
    public ResponseEntity<MissionResponse> GetUserTodoMissions(MissionUserTodoRequest missionUserTodoRequest);
    public ResponseEntity<MissionOneResponse> signUpMission(MissionSignUpRequest missionSignUpRequest);
    public ResponseEntity<MissionOneResponse> updateMission(MissionUpdateRequest missionUpdateRequest);
    public ResponseEntity<MissionResponse> deleteMission(MissionDeleteRequest missionDeleteRequest);
    public ResponseEntity<MissionFavoriteResponse> MissionFavorite(MissionFavoriteRequest missionLikeRequest);
    public ResponseEntity<MissionDifficultyResponse> difficultyMission(MissionDifficultRequest missionDifficultRequest);
    public ResponseEntity<MissionResponse> MissionTodo(MissionTodoRequest missionTodoRequest);
    public ResponseEntity<MissionResponse> uploadMissionImage(String userEmail , Long missionId,String imagePath);
}