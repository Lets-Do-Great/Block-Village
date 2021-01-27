package com.ssafy.edu.service.mission;

import com.ssafy.edu.model.mission.*;
import com.ssafy.edu.model.user.UserResponse;
import org.springframework.http.ResponseEntity;

public interface MissionService {
    public ResponseEntity<MissionResponse> findAll(MissionSearchTypeRequest missionSearchTypeRequest);
    public ResponseEntity<MissionResponse> findById(Long missionId);
    public ResponseEntity<MissionResponse> findByUserId(Long userId);
    public ResponseEntity<MissionResponse> signUpMission(MissionSignUpRequest missionSignUpRequest);
    public ResponseEntity<MissionResponse> updateMission(MissionUpdateRequest missionUpdateRequest);
    public ResponseEntity<MissionResponse> deleteMission(Long missionId);
}